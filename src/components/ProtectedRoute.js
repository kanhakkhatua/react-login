import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const userAuth = () => {
  const LogedinData = JSON.parse(localStorage.getItem("LogedinData"));
  //   console.log(LogedinData);
  if (LogedinData) {
    return true;
  } else {
    return false;
  }
};

function ProtectedRoute() {
  //   userAuth();
  const auth = userAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
