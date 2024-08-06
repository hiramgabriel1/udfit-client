import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/authStore";

function ProtectedRoute() {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated 
    ? <Outlet /> 
    : <Navigate to="/app/auth/login-user" />;
}

export default ProtectedRoute;
