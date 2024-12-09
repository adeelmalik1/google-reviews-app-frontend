import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home.js"));

function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default NavigationRoutes;
