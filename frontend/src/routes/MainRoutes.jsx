import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/signin/SignIn";
import { SignUp } from "../pages/signup/SignUp";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
