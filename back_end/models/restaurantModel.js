const connection = require("../config/db");

const getAllRestaurants = async (user_id, admin = false) => {
  let results = null;
  if (admin) {
    results = await connection.query(
      "SELECT id, restaurant_name, address, votes FROM restaurants;"
    );
  } else {
    results = await connection.query(
      "SELECT id, restaurant_name, address, img_url, url, votes FROM restaurants r JOIN users_restaurants j ON r.id=j.restaurant_id WHERE j.user_id=?;",
      [user_id]
    );
  }
  return results[0];
};

const getRestaurantById = async (id) => {
  let [results] = await connection.query(
    "SELECT * FROM restaurants WHERE id=?;",
    [id]
  );
  return results[0];
};

const createRestaurantEntry = async (body) => {
  let [results] = await connection.query("INSERT INTO restaurants SET ?;", {
    ...body,
  });
  return results;
};

const crossReferenceUserRestaurant = async (user_id, restaurant_id) => {
  let [results] = await connection.query(
    "INSERT INTO users_restaurants SET ?;",
    { user_id, restaurant_id }
  );
  return results;
};

const crossRestaurantDelete = async (user_id, restaurant_id) => {
  let [results] = await connection.query(
    "DELETE FROM users_restaurants WHERE user_id=? AND restaurant_id=?",
    [user_id, restaurant_id]
  );
  return results;
};
module.exports = {
  getAllRestaurants,
  createRestaurantEntry,
  getRestaurantById,
  crossReferenceUserRestaurant,
  crossRestaurantDelete,
};
