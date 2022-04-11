import React from "react";

import HeaderAdmin from "./admin/HeaderAdmin";
import LeftMenuAdmin from "./admin/LeftMenuAdmin";

import Profile from "./user/Profile";
import UserAdmin from "./admin/UserAdmin";

import { Outlet } from "react-router-dom";

function Admin() {
  const LogedinData = JSON.parse(localStorage.getItem("LogedinData"));

  const getLoginData = () => {
    if ("user" === LogedinData) {
      return (
        <>
          <Outlet />
        </>
      );
    } else if ("admin" === LogedinData) {
      return (
        <>
          <Outlet />
        </>
      );
    }
  };

  return (
    <>
      <HeaderAdmin />

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <LeftMenuAdmin />
            </div>
          </div>
          <div>{getLoginData()}</div>
        </div>
      </div>
    </>
  );
}

export default Admin;
