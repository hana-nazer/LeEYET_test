import React from "react";
import {Route, Routes } from "react-router-dom";
import Register from '../pages/Register'
import EditProfile from '../pages/EditProfile'

function UserRoutes() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register/>}/>
       <Route path="/update_profile" element={<EditProfile/>}/>
      </Routes>
    </>
  );
}

export default UserRoutes;
