import React from "react";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  const getLoginData = () => {
    // console.log("get login data");
    const token = JSON.parse(localStorage.getItem("token"));
    // console.log(token.usertype);

    if (token.usertype === "user") {
      // console.log("user");
      return (
        <>
          <Link to="./movieuser">Movie</Link>
        </>
      );
    } else {
      // console.log("admin");
      return (
        <>
          <Link to="./movieadmin">Movies</Link>
        </>
      );
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              {getLoginData()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
