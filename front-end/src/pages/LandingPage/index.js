import React, { useEffect, useState } from "react";
import { axiosYelp } from "../../apiRequests";
import RestaurantCard from "../../components/RestaurantCard";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const LandingPage = () => {
  const [businesses, setBusinesses] = useState([]);
  const yelp = async (
    sortBy = "best_match",
    location = "Lisbon",
    term = " "
  ) => {
    try {
      const results = await axiosYelp.get(
        `/search?term=${term}&location=${location}&sort_by=${sortBy}`
      );

      setBusinesses(results.data.businesses);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    yelp();
  }, []);

  return (
    <>
      <h1>Hello there!</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {businesses.map((business) => (
          <RestaurantCard info={business} key={business.id} />
        ))}
      </div>
    </>
  );
};

export default LandingPage;
