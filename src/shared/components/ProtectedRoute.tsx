// ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/authStore";

function ProtectedRoute() {
  const { isAuthenticated, token } = useAuthStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    token: state.token,
  }));

  console.log(token);
  
  console.log('Auth status:', isAuthenticated, 'Token:', token);

  return isAuthenticated 
    ? <Outlet /> 
    : <Navigate to="/app/auth/login-user" />;
}

export default ProtectedRoute;
