import React from "react";
import { useNavigate } from "react-router-dom";

// const info = {
//   id: "4jUlziXrWB4nmzWqeo7Skg",
//   alias: "manteigaria-lisboa-3",
//   name: "Manteigaria",
//   image_url:
//     "https://s3-media1.fl.yelpcdn.com/bphoto/BdP0tFFBB_5ZTESLSXco7Q/o.jpg",
//   is_closed: false,
//   url: "https://www.yelp.com/biz/manteigaria-lisboa-3?adjust_creative=J5Mkow8zO6OYZYLwmmZF-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=J5Mkow8zO6OYZYLwmmZF-A",
//   review_count: 455,
//   categories: [
//     {
//       alias: "bakeries",
//       title: "Bakeries",
//     },
//     {
//       alias: "cafes",
//       title: "Cafes",
//     },
//   ],
//   rating: 5,
//   coordinates: {
//     latitude: 38.710757,
//     longitude: -9.14406,
//   },
//   transactions: [],
//   price: "€",
//   location: {
//     address1: "R. do Loreto, 2",
//     address2: "",
//     address3: null,
//     city: "Lisbon",
//     zip_code: "1200-242",
//     country: "PT",
//     state: "11",
//     display_address: ["R. do Loreto, 2", "1200-242 Lisbon", "Portugal"],
//   },
//   phone: "+351213471492",
//   display_phone: "+351 21 347 1492",
//   distance: 3893.573052539146,
// };

const RestaurantCard = ({ info }) => {
  const navigate = useNavigate();

  const goToDetails = (restaurantId) => {
    return navigate(`/restaurant/${restaurantId}/details`, { state: info });
  };

  // const addToPersonalList = async () => {

  // }
  return (
    <div style={{ width: "170px", height: "270px", marginBottom: "3vh" }}>
      <h1>{info.name}</h1>
      <div
        className="img-container"
        style={{ maxWidth: "80%", maxHeight: "60%", alignSelf: "center" }}
        onClick={() => goToDetails(info.id)}
      >
        <img
          src={info.image_url}
          alt={info.name}
          style={{ width: "100%", height: "100%" }}
        />
        <span>Click Me</span>
      </div>
      <span>Rating: {info.rating}</span>&nbsp;<span>Add</span>
    </div>
  );
};

export default RestaurantCard;
