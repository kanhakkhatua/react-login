import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import User from "./User";
import Admin from "./Admin";
import Error from "./Error";
import "./App.css";
import HeaderAdmin from "./admin/HeaderAdmin";
import LeftMenuAdmin from "./admin/LeftMenuAdmin";

import HeaderUser from "./user/HeaderUser";
import LeftMenuUser from "./user/LeftMenuUser";

import Profile from "./user/Profile";
import MovieUser from "./user/MoviesUser";

import UserAdmin from "./admin/UserAdmin";
import AdminMovie from "./admin/MoviesAdmin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="user" element={<User />}>
          <Route path="profile" element={<Profile />} />
          <Route path="movieuser" element={<MovieUser />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route path="profile" element={<UserAdmin />} />
          <Route path="movieuser" element={<AdminMovie />} />
        </Route>

        <Route path="hader" element={<HeaderAdmin />} />
        <Route path="leftmenuuser" element={<LeftMenuUser />} />

        <Route path="leftmenuadmin" element={<LeftMenuAdmin />} />
        <Route path="headeruser" element={<HeaderUser />} />

        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
