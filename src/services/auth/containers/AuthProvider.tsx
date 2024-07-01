import { useAuthStore } from "../store/useAuthStroe";
import { useEffect } from "react";
import { createAuthAxios } from "../utils/http";
import { useAuthAxiosStore } from "../store/useAuthAxiosStroe";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const { signOut, refresh } = useAuth();
  const { accessToken } = useAuthStore();
  const { isAuthenticated, setIsAuthenticated } = useAuthAxiosStore();
  const { setAuthAxios, deleteAuthAxios } = useAuthAxiosStore();

  useEffect(() => {
    console.log("refreshing token interval");
    if (!isAuthenticated) {
      return;
    }
    const interval = setInterval(
      () => {
        refresh();
      },
      5 * 60 * 1000,
    ); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, [isAuthenticated, refresh]);

  useEffect(() => {
    console.log("setting auth axios instance");
    if (accessToken) {
      setAuthAxios(createAuthAxios(accessToken));
      setIsAuthenticated(true);
    } else {
      deleteAuthAxios();
      setIsAuthenticated(false);
    }
  }, [accessToken, deleteAuthAxios, setAuthAxios, setIsAuthenticated]);

  useEffect(() => {
    console.log("checking token expiration and refreshing if needed");
    const refresh = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
        signOut();
      }
    };

    if (accessToken) {
      const decodedAccessToken = jwtDecode(accessToken);
      if (!decodedAccessToken.exp) {
        throw new Error("Invalid access token");
      }
      const tokenExp = new Date(decodedAccessToken.exp * 1000);
      const now = new Date();

      // Refresh token if it's about to expire
      if (tokenExp.getTime() - now.getTime() < 60 * 1000) {
        refresh();
      }
    }
  }, [accessToken, signOut]);

  return <>{children}</>;
}
