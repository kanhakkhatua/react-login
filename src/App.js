import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Error from "./Error";
import "./App.css";

import Layout from "./Layout";

import Profile from "./user/Profile";
import MovieUser from "./user/MoviesUser";

import UserAdmin from "./admin/UserAdmin";
import AdminMovie from "./admin/MoviesAdmin";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* <Route element={<ProtectedRoute />}>
          <Route path="user" element={<UserLayout />}>
            <Route index element={<Profile />} />
            <Route path="movieuser" element={<MovieUser />} />
          </Route>
        </Route> */}

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="admin" element={<UserAdmin />} />
            <Route path="movieadmin" element={<AdminMovie />} />

            <Route path="user" element={<Profile />} />
            <Route path="movieuser" element={<MovieUser />} />
          </Route>
        </Route>

        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
