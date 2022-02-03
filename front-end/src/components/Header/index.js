import React from "react";
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "../../apiRequests";
import Cookies from "universal-cookie";

const Header = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const isLoggedIn = cookies.get("loggedIn");

  const handleClick = async () => {
    if (isLoggedIn) {
      try {
        const results = await axiosAuth.get("/logout");
        console.log(results);
      } catch (error) {
        console.log(error.response);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontSize: "2.5rem", fontWeight: "900" }}>
        Restaurant Wishlist
      </span>
      &nbsp;
      <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>
        {isLoggedIn ? `Hello ${isLoggedIn}` : " "}
      </span>
      &nbsp;
      <span
        onClick={() => handleClick()}
        style={{ fontSize: "1.5rem", fontWeight: "700" }}
      >
        {isLoggedIn ? "Log Out" : "Log In"}
      </span>
      &nbsp;
    </div>
  );
};

export default Header;
