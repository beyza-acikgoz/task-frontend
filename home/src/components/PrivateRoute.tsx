import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactElement;
  isAuthenticated: boolean;
}

export default function PrivateRoute({ children, isAuthenticated }: PrivateRouteProps) {
  const location = useLocation();

  if (!isAuthenticated) {
    // Giriş yoksa login sayfasına yönlendir, geldiği sayfayı location.state ile aktar
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Giriş varsa erişime izin ver
  return children;
}
