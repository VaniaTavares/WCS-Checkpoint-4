import React from "react";
import { useLocation } from "react-router-dom";
import CommentsSection from "../../components/CommentsSection";
import RestaurantDetails from "../../components/RestaurantDetails";

const RestaurantDetailsPage = () => {
  const location = useLocation();
  return (
    <>
      <RestaurantDetails info={location.state} />
      <CommentsSection />
    </>
  );
};

export default RestaurantDetailsPage;
