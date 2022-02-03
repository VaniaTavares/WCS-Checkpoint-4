import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  RestaurantDetailsPage,
} from "./pages";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route
          path="/restaurant/:restaurantId/details"
          element={<RestaurantDetailsPage />}
        />
      </Routes>
    </>
  );
};

export default App;
