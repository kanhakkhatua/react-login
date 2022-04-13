import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();
  var HandleLogoutAdmin = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">User Type</a>
          <div className="d-flex">
            <div>Admin Name</div>
            <div style={{ marginLeft: "5px" }}>
              <button onClick={HandleLogoutAdmin}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderAdmin;
