import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

console.log(
  process.env.REACT_APP_API_YELP,
  process.env.REACT_APP_SERVER_API_AUTH,
  process.env.REACT_APP_SERVER_API
);

const App = () => {
  const yelp = async (
    sortBy = "best_match",
    location = "Lisbon",
    term = " "
  ) => {
    try {
      const results = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      );

      console.log(results.data.businesses);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    yelp();
  }, []);

  return (
    <div className="App">
      <h1>Hello there!</h1>
    </div>
  );
};

export default App;
