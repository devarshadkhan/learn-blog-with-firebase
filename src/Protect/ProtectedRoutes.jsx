import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const userToken = localStorage.getItem("accessToken");
  // const {isLoggedIn} = useFirebase
  let location = useLocation();

  if (!userToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoutes;
