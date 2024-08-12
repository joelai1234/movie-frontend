import create from "zustand";
import { AlertColor } from "@mui/material";

interface Notification {
  message: string;
  severity: AlertColor;
}

interface NotificationStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  notification: Notification | null;
  showNotification: (message: string, severity: AlertColor) => void;
  deleteNotification: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  notification: null,
  showNotification: (message, severity) =>
    set({ notification: { message, severity }, isOpen: true }),
  deleteNotification: () => set({ notification: null }),
}));
