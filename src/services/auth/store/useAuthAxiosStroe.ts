import axios, { AxiosInstance } from "axios";
import { create } from "zustand";

interface AuthAxiosState {
  authAxios: AxiosInstance;
  setAuthAxios: (authAxios: AxiosInstance) => void;
  deleteAuthAxios: () => void;
}

export const useAuthAxiosStore = create<AuthAxiosState>()((set) => ({
  authAxios: axios,
  setAuthAxios: (authAxios) => set({ authAxios }),
  deleteAuthAxios: () => set({ authAxios: undefined }),
}));
