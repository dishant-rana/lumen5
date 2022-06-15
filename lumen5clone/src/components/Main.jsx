import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" link={<Home />} />
      </Routes>
    </div>
  );
};
