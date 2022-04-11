import React from "react";

import { useNavigate } from "react-router-dom";

function HeaderUser() {
  const navigate = useNavigate();
  var HandleLogout = () => {
    localStorage.removeItem("LogedinData");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">User Type</a>
          <div className="d-flex">
            <div>User Name</div>
            <div style={{ marginLeft: "5px" }}>
              <button onClick={HandleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderUser;
