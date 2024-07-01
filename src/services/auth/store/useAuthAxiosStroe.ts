import axios, { AxiosInstance } from "axios";
import { create } from "zustand";

interface AuthAxiosState {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  authAxios: AxiosInstance;
  setAuthAxios: (authAxios: AxiosInstance) => void;
  deleteAuthAxios: () => void;
}

export const useAuthAxiosStore = create<AuthAxiosState>()((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  authAxios: axios,
  setAuthAxios: (authAxios) => set({ authAxios }),
  deleteAuthAxios: () => set({ authAxios: undefined }),
}));
