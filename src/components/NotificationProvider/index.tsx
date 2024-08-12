import React from "react";
import { Snackbar, Alert, SnackbarCloseReason } from "@mui/material";
import { useNotificationStore } from "../../store/useNotificationStore";

const NotificationProvider: React.FC = () => {
  const { notification,isOpen,setIsOpen } =
    useNotificationStore();

    const handleClose = (
      _: React.SyntheticEvent | Event,
      reason?: SnackbarCloseReason,
    ) => {
      if (reason === 'clickaway') {
        return;
      }
      setIsOpen(false);
    };
  
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
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
