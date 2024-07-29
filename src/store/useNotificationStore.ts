import create from "zustand";
import { AlertColor } from "@mui/material";

interface Notification {
  message: string;
  severity: AlertColor;
}

interface NotificationStore {
  notification: Notification | null;
  showNotification: (message: string, severity: AlertColor) => void;
  hideNotification: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notification: null,
  showNotification: (message, severity) =>
    set({ notification: { message, severity } }),
  hideNotification: () => set({ notification: null }),
}));
