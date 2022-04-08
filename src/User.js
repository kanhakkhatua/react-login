import React from "react";
import { Outlet } from "react-router-dom";
import LeftMenuUser from "./user/LeftMenuUser";
import HeaderUser from "./user/HeaderUser";

function User() {
  return (
    <>
      <HeaderUser />
      <LeftMenuUser />
      <Outlet />
    </>
  );
}

export default User;
