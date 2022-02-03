import React from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apiRequests";
import { isLoggedIn } from "../ProtectedRoutes";

const RestaurantCard = ({ info }) => {
  const navigate = useNavigate();

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
    <div
      style={{
        width: "25vw",
        height: "35vh",
        marginLeft: "1.2vw",
        marginBottom: "1.5vh",
        border: "solid black 2px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
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
      <span>Rating: {info.rating}</span>&nbsp;
      <span onClick={() => addToPersonalList()}>Add</span>
    </div>
  );
};

export default RestaurantCard;
