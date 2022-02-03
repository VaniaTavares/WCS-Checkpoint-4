import React from "react";
import { useLocation, useParams } from "react-router-dom";
import RestaurantDetails from "../../components/RestaurantDetails";

const RestaurantDetailsPage = () => {
  const location = useLocation();
  const params = useParams();
  console.log(location, params);
  return <RestaurantDetails info={location.state} />;
};

export default RestaurantDetailsPage;
