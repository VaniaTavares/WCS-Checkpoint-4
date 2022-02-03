import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export const isLoggedIn = cookies.get("loggedIn");

export const PrivateRoutes = () => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
