import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";

import { HomeMain } from "../pages/home/HomeMain";
import { Payment } from "../pages/payment/Payment";
import { PaymentSuccess } from "../pages/payment/PaymentSuccess";
import { PricingMain } from "../pages/pricing/PricingMain";
import { SignIn } from "../pages/signin/SignIn";
import { SignUp } from "../pages/signup/SignUp";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<PricingMain />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment_success" element={<PaymentSuccess />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
