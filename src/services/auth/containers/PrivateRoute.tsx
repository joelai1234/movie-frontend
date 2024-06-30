import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AuthProvider from "./authProvider";

export default function PrivateRoute() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" />;
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
