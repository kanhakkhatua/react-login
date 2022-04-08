import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [regValue, setRegValue] = useState({
    usertype: "user",
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    age: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const changeHandler = (e) => {
    setRegValue({
      ...regValue,
      [e.target.name]: e.target.value,
    });
  };

  const [loginValue, setLoginValue] = useState({
    loginemale: "",
    loginpassword: "",
  });

  const changeHandlerLogin = (e) => {
    setLoginValue({
      ...loginValue,
      [e.target.name]: e.target.value,
    });
  };

  var getRegdata = () => {
    // console.log("get reg data");

    var arr = [];
    arr.push(regValue);

    if ("user" === regValue.usertype) {
      // console.log("User Data");
      const userData = JSON.parse(localStorage.getItem("userData"));

      if (userData && userData.length > 0) {
        userData.push(regValue);
        localStorage.setItem("userData", JSON.stringify(userData));
      } else {
        localStorage.setItem("userData", JSON.stringify(arr));
      }
    } else if ("admin" === regValue.usertype) {
      // console.log("Admin data");

      const adminData = JSON.parse(localStorage.getItem("adminData"));

      if (adminData && adminData.length > 0) {
        adminData.push(regValue);
        localStorage.setItem("adminData", JSON.stringify(adminData));
      } else {
        localStorage.setItem("adminData", JSON.stringify(arr));
      }
    } else {
      console.log("Please provide you are User or Admin");
    }
  };

  var LoginUser = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const adminData = JSON.parse(localStorage.getItem("adminData"));

    if ("user" === regValue.usertype) {
      var filterUser = userData.filter(
        (e) =>
          loginValue.loginemale === e.email &&
          loginValue.loginpassword === e.password
      );

      if (filterUser.length === 1) {
        navigate("/user");
      } else {
        alert("User Not Found ... Please Register !");
      }
    } else if ("admin" === regValue.usertype) {
      var filterAdmin = adminData.filter(
        (e) =>
          loginValue.loginemale === e.email &&
          loginValue.loginpassword === e.password
      );

      if (filterAdmin.length === 1) {
        navigate("/admin");
      } else {
        alert("Admin Not Found ... Please Register !");
      }
    }
  };

  return (
    <>
      <div
        style={{ marginLeft: "35%", marginTop: "5%", marginRight: "50%" }}
        className="card bg-secondary text-white"
      >
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="usertype"
            id="flexRadioDefault1"
            value="admin"
            onChange={changeHandler}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Admin
          </label>
        </div>
        <div className="form-check">
          <input
            value="user"
            type="radio"
            className="form-check-input"
            name="usertype"
            id="flexRadioDefault2"
            onChange={changeHandler}
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            User
          </label>
        </div>
      </div>

      {/* Login user */}

      <div
        id="loginUser"
        className="card bg-dark text-white border border-success"
        style={{ marginLeft: "25%", marginTop: "5%", marginRight: "35%" }}
      >
        <h1 style={{ textAlign: "center" }}>Please Login</h1>
        <div className="card-body" style={{ alignContent: "center" }}>
          <div>
            <span>Email: </span>
            <input
              type="email"
              name="loginemale"
              placeholder="Enter Your Email"
              onChange={changeHandlerLogin}
            />
          </div>
          <div>
            <span>Password: </span>
            <input
              type="text"
              name="loginpassword"
              placeholder="Enter Your Password"
              onChange={changeHandlerLogin}
            />
          </div>
          <button
            className="rounded-pill btn btn-success"
            style={{ marginLeft: "35%", marginTop: "3%" }}
            onClick={LoginUser}
          >
            Login
          </button>
          <div>
            <p>
              New User Please{" "}
              <span
                className="text-primary "
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
              >
                Register
              </span>{" "}
              .
            </p>
          </div>
        </div>
      </div>

      {/* Register Modal */}

      <div className="modal" tabIndex={-1} id="registerModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Please Register </h5>
              <button
                typeof="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <span>Name: </span>
                <input
                  type="text"
                  name="name"
                  id="regName"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <span>Email: </span>
                <input
                  type="text"
                  name="email"
                  id="regEmail"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <span>Password: </span>
                <input
                  type="text"
                  name="password"
                  id="regPassword"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <span>Address: </span>
                <input
                  type="text"
                  name="address"
                  id="regAddress"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <span>Phone: </span>
                <input
                  type="text"
                  name="phone"
                  id="regPhone"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <span>Age: </span>
                <input
                  type="text"
                  name="age"
                  id="regAge"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <span>City: </span>
                <input
                  type="text"
                  name="city"
                  id="regCity"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <span>State: </span>
                <input
                  type="text"
                  name="state"
                  id="regState"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <span>Zip code: </span>
                <input
                  type="text"
                  name="zipcode"
                  id="regZipcode"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                typeof="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                typeof="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={getRegdata}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
