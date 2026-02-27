// src/components/common/ProtectedRoute.jsx

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  // اگر children داشت (مثل DashboardLayout) اون رو رندر کن
  // وگرنه Outlet برای nested routes
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
