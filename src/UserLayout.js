import React from "react";
import { Outlet } from "react-router-dom";
import LeftMenuUser from "./user/LeftMenuUser";
import HeaderUser from "./user/HeaderUser";

function User() {
  return (
    <>
      <HeaderUser />

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <LeftMenuUser />
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
