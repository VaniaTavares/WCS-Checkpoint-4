import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, RestaurantDetailsPage } from "./pages";

// import {
//   LandingPage,
//   LoginPage,
//   RegisterPage,
//   RestaurantDetailsPage,
// } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<LandingPage />} />
      <Route
        path="/restaurant/:restaurantId/details"
        element={<RestaurantDetailsPage />}
      />
    </Routes>
  );
};

export default App;
