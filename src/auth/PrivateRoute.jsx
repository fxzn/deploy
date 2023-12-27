import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRouteUser = ({ element, allowedRoles }) => {
  const { user } = useAuth();

  console.log("User role:", user ? user.role : null);

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default PrivateRouteUser;