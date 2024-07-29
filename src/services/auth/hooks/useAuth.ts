import { useMutation } from "react-query";
import { useAuthStore } from "../store/useAuthStroe";
import axios from "axios";
import { useAuthAxiosStore } from "../store/useAuthAxiosStroe";
import { auth, provider, signInWithPopup } from "../utils/firebase";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function useAuth() {
  const {
    refreshToken,
    setAuthData,
    deleteAuthData,
    setAccessToken,
    setRefreshToken,
  } = useAuthStore();
  const { authAxios, isAuthenticated } = useAuthAxiosStore();

  const signInMutation = useMutation({
    mutationFn: async () => {
      const result = await signInWithPopup(auth, provider);
      const { accessToken } = result.user as unknown as ({ accessToken: string });

      return axios.post(`${VITE_BACKEND_API_BASE_URL}/api/v1/auth/firebase`, {
        token: accessToken,
        type: "google.com",
      });

      // return axios.get(
      //   `${VITE_BACKEND_API_BASE_URL}/api/v1/auth/google/signin/mock1`,
      // );
    },
    onSuccess: (data) => {
      setAuthData({ ...data.data, userData: data.data.me });
    },
  });

  const signOutMutation = useMutation({
    mutationFn: () => {
      return authAxios.delete("/api/v1/auth/signout");
    },
  });

  const signIn = () => {
    signInMutation.mutate();
  };

  const signOut = () => {
    deleteAuthData();
    signOutMutation.mutate();
  };

  const refresh = async () => {
    console.log("refreshToken", refreshToken);

    const response = await axios.put(
      `${VITE_BACKEND_API_BASE_URL}/api/v1/auth/refresh-token`,
      undefined,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );
    setAccessToken(response.data.accessToken);
    setRefreshToken(response.data.refreshToken);
  };

  return {
    authAxios,
    isAuthenticated,
    signIn,
    signOut,
    refresh,
  };
}
