const connection = require("../config/db");

const getAllRestaurants = async (user_id, admin = false) => {
  let results = null;
  if (admin) {
    results = await connection.query(
      "SELECT id, restaurant_name, address, votes FROM restaurants;"
    );
  } else {
    results = await connection.query(
      "SELECT * FROM restaurants r JOIN users_restaurants j ON r.id=j.restaurant_id WHERE j.user_id=?;",
      [user_id]
    );
  }
  return [results];
};

const createRestaurantEntry = async (body) => {
  let [results] = await connection.query("INSERT INTO restaurants SET ?;", {
    ...body,
  });
  return results;
};

module.exports = { getAllRestaurants, createRestaurantEntry };
