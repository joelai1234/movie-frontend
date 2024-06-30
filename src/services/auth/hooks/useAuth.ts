import { useMutation } from "react-query";
import { useAuthStore } from "../store/useAuthStroe";
import axios from "axios";
import { useAuthAxiosStore } from "../store/useAuthAxiosStroe";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function useAuth() {
  const {
    accessToken,
    refreshToken,
    setAuthData,
    deleteAuthData,
    setAccessToken,
    setRefreshToken,
  } = useAuthStore();
  const { authAxios } = useAuthAxiosStore();

  const isAuthenticated = !!accessToken;

  const signInMutation = useMutation({
    mutationFn: () => {
      return axios.get(
        `${VITE_BACKEND_API_BASE_URL}/api/v1/auth/google/signin/mock1`,
      );
    },
    onSuccess: (data) => {
      setAuthData(data.data);
    },
  });

  const signOutMutation = useMutation({
    mutationFn: () => {
      return axios.delete("/api/v1/auth/signout");
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
    const response = await axios.post(
      `${VITE_BACKEND_API_BASE_URL}/api/v1/auth/refresh-token`,
      {
        refreshToken,
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
