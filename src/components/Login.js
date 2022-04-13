import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("user");

  // console.log(userType);

  const [regValue, setRegValue] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    age: "",
    adhaar: "",
  });
  const changeHandler = (e) => {
    setRegValue({
      ...regValue,
      [e.target.name]: e.target.value,
    });
  };

  const [regAdminValue, setRegAdminValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandlerAdmin = (e) => {
    setRegAdminValue({
      ...regAdminValue,
      [e.target.name]: e.target.value,
    });
  };

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const changeHandlerLogin = (e) => {
    setLoginValue({
      ...loginValue,
      [e.target.name]: e.target.value,
    });
  };

  var getRegdata = () => {
    console.log("get reg data");
    // console.log(regValue);

    if ("user" === userType) {
      console.log("user register");
      axios
        .post("http://172.16.15.9:5000/api/user/register", regValue)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => alert(err));
    } else {
      console.log("admin register");
      // console.log(regAdminValue);
      axios
        .post("http://172.16.15.9:5000/api/admin/register", regAdminValue)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => alert(err));
    }
  };

  var LoginUser = () => {
    if ("user" === userType) {
      axios
        .post("http://172.16.15.9:5000/api/user/login", loginValue)
        .then((res) => {
          if (res.data.success === true) {
            localStorage.setItem(
              "token",
              JSON.stringify({
                token: res.data.token,
                usertype: userType,
              })
            );

            navigate("/user");
          }
        })
        .catch((err) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User Not Found ... Please Register !",
            footer: err,
          })
        );
    } else {
      axios
        .post("http://172.16.15.9:5000/api/admin/login", loginValue)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem(
              "token",
              JSON.stringify({
                token: res.data.token,
                usertype: userType,
              })
            );
            navigate("/admin");
          }
        })
        .catch((err) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Admin Not Found ... Please Register !",
            footer: err,
          })
        );
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
            name="userType"
            id="flexRadioDefault1"
            value="admin"
            onChange={(e) => setUserType(e.target.value)}
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
            name="userType"
            id="flexRadioDefault2"
            onChange={(e) => setUserType(e.target.value)}
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
              name="email"
              placeholder="Enter Your Email"
              onChange={changeHandlerLogin}
            />
          </div>
          <div>
            <span>Password: </span>
            <input
              type="password"
              name="password"
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
                // onClick={Register}
              >
                Register
              </span>{" "}
              .
            </p>
          </div>
        </div>
      </div>

      {/* Register Modal */}

      {userType === "user" ? (
        <>
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
                      type="email"
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
                      type="number"
                      name="phone"
                      id="regPhone"
                      onChange={changeHandler}
                    />
                  </div>
                  <div>
                    <span>Age: </span>
                    <input type="number" name="age" onChange={changeHandler} />
                  </div>
                  <div>
                    <span>Adhaar: </span>
                    <input
                      type="number"
                      name="adhaar"
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
      ) : (
        <>
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
                      onChange={changeHandlerAdmin}
                    />
                  </div>
                  <div>
                    <span>Email: </span>
                    <input
                      type="email"
                      name="email"
                      id="regEmail"
                      onChange={changeHandlerAdmin}
                    />
                  </div>
                  <div>
                    <span>Password: </span>
                    <input
                      type="text"
                      name="password"
                      id="regPassword"
                      onChange={changeHandlerAdmin}
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
      )}
    </>
  );
}

export default Login;
