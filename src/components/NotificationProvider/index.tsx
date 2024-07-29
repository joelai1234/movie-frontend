import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useNotificationStore } from "../../store/useNotificationStore";

const NotificationProvider: React.FC = () => {
  const { notification, hideNotification } = useNotificationStore();

  const handleClose = () => {
    hideNotification();
  };

  return (
    <Snackbar
      open={notification !== null}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={notification?.severity}
        sx={{ width: "100%" }}
      >
        {notification?.message}
      </Alert>
    </Snackbar>
  );
};

export default NotificationProvider;
