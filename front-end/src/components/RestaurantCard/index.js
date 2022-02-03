import React from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apiRequests";
import Cookies from "universal-cookie";

import "./index.scss";
const RestaurantCard = ({ info }) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const isLoggedIn = cookies.get("loggedIn");

  const goToDetails = (restaurantId) => {
    return navigate(`/restaurant/${restaurantId}/details`, { state: info });
  };

  const addToPersonalList = async () => {
    if (isLoggedIn) {
      try {
        const restaurant = {
          id: info.id,
          address: info.location.display_address.join(" "),
          restaurant_name: info.name,
          image_url: info.image_url,
          url: info.url,
        };

        const add = await axiosInstance.post("/restaurants", restaurant);
        console.log(add);
      } catch (err) {
        console.log(err.response);
      }
    } else {
      alert("You must register/login");
    }
  };

  return (
    <div className="restaurant-card">
      <h1>{info.name}</h1>
      <div
        className="img-container"
        style={{
          maxWidth: "70%",
          maxHeight: "50%",
          alignSelf: "center",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
        onClick={() => goToDetails(info.id)}
      >
        <img
          src={info.image_url}
          alt={info.name}
          style={{ width: "100%", height: "100%" }}
        />
        <span>Click Me</span>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <span>Rating: {info.rating}</span>&nbsp;
        <span onClick={() => addToPersonalList()}>Add</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
