import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks";

const ProtectedRoute = ({ children }) => {
  const { isUserLogedIn } = useAuth();
  const location = useLocation();

  return <>{isUserLogedIn ? children : <Navigate to="/login"  state={location.pathname} /> }</>
};

export { ProtectedRoute };
