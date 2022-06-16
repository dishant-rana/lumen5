import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomeMain } from "../pages/home/HomeMain";
import { Payment } from "../pages/payment/Payment";
import { SignIn } from "../pages/signin/SignIn";
import { SignUp } from "../pages/signup/SignUp";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
