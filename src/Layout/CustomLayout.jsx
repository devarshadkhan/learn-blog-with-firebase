import React from "react";
import MyNavbar from "../Components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../Protect/ProtectedRoutes";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
const CustomLayout = () => {
  return (
    <div>
      <MyNavbar />
      {/* <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
    </div>
  );
};

export default CustomLayout;
