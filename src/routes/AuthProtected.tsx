import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface AuthProtectedProps {
  children: React.ReactNode;
}

const AuthProtected: React.FC<AuthProtectedProps> = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("token"); // Você pode ajustar isso de acordo com sua lógica de autenticação

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthProtected;
