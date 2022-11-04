import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "./Components/Basket/Basket";
import HomePage from "./Components/HomePage/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};

export default MainRoutes;
