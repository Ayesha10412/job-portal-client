import React, { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
import { span } from "framer-motion/client";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signIn" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
