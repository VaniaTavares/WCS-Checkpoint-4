import React, { useEffect, useState } from "react";
import { axiosYelp } from "../../apiRequests";
import RestaurantCard from "../../components/RestaurantCard";
import SortButtons from "../../components/SortButtons";
import BarLoader from "../../components/Loading";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

console.log(Object.keys(sortByOptions));

const LandingPage = () => {
  const [businesses, setBusinesses] = useState([]);
  const [sortBy, setSortBy] = useState("best_match");
  const [loading, setLoading] = useState(false);
  const yelp = async (sort, location = "Lisbon") => {
    setLoading(true);
    try {
      const results = await axiosYelp.get(
        `/search?location=${location}&sort_by=${sort}`
      );

      setBusinesses(results.data.businesses);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    yelp(sortBy);
  }, [sortBy]);

  return (
    <>
      <h1>Hello there!</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxHeight: "10vh",
          marginBottom: "2vh",
        }}
      >
        {Object.keys(sortByOptions).map((option) => (
          <SortButtons
            text={option}
            key={sortByOptions[option]}
            sortBy={sortBy}
            setSortBy={setSortBy}
            value={sortByOptions[option]}
          />
        ))}
      </div>
      {loading && <BarLoader />}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {!loading &&
          businesses.length &&
          businesses.map((business) => (
            <RestaurantCard info={business} key={business.id} />
          ))}
      </div>
    </>
  );
};

export default LandingPage;
