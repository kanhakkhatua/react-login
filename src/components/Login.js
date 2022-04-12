import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    // console.log("LOgin");
    // console.log(userType);

    if ("user" === userType) {
      console.log(" user login");
      console.log(loginValue);

      axios
        .post("http://172.16.15.9:5000/api/user/login", loginValue)
        .then((res) => {
          console.log(res.data);
          if (res.data.success === true) {
            // console.log("hello user");
            navigate("/user");
          }
        })
        .catch((err) => alert(err));

      // var filterUser = userData.filter(
      //   (e) =>
      //     loginValue.loginemale === e.email &&
      //     loginValue.loginpassword === e.password
      // );

      // if (filterUser.length === 1) {
      //   localStorage.setItem("LogedinData", JSON.stringify(regValue.usertype));
      //   navigate("/user");
      // } else {
      //   alert("User Not Found ... Please Register !");
      // }
    } else {
      console.log("admin login");

      //   var filterAdmin = adminData.filter(
      //     (e) =>
      //       loginValue.loginemale === e.email &&
      //       loginValue.loginpassword === e.password
      //   );

      //   if (filterAdmin.length === 1) {
      //     localStorage.setItem("LogedinData", JSON.stringify(regValue.usertype));
      //     navigate("/admin");
      //   } else {
      //     alert("Admin Not Found ... Please Register !");
      //   }
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
              type="text"
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
                      type="text"
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
