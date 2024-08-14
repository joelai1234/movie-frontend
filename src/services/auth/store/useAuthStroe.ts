import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserData {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  userData?: UserData;
  accessToken?: string;
  refreshToken?: string;
  setAuthData: (data: {
    accessToken: string;
    refreshToken: string;
    userData: UserData;
  }) => void;
  deleteAuthData: () => void;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      setAuthData: (data) =>
        set({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          userData: data.userData,
        }),
      deleteAuthData: () =>
        set({
          accessToken: undefined,
          refreshToken: undefined,
          userData: undefined,
        }),
      setAccessToken: (accessToken) => set({ accessToken }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
    }),
    {
      name: "user-data", // name of item in the storage (must be unique)
    },
  ),
);
