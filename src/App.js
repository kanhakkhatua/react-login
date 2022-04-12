import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Error from "./components/Error";
import "./App.css";

import Layout from "./components/Layout";

import Profile from "./components/user/Profile";
import MovieUser from "./components/user/MoviesUser";

import UserAdmin from "./components/admin/UserAdmin";
import AdminMovie from "./components/admin/MoviesAdmin";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* <Route element={<ProtectedRoute />}> */}
        <Route element={<Layout />}>
          <Route path="admin" element={<UserAdmin />} />
          <Route path="movieadmin" element={<AdminMovie />} />

          <Route path="user" element={<Profile />} />
          <Route path="movieuser" element={<MovieUser />} />
        </Route>
        {/* </Route> */}

        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
