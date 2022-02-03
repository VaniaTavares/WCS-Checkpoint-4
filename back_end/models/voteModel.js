const connection = require("../config/db");

const retriveRestaurantVotes = async (restaurant_id) => {
  let [results] = await connection.query(
    "SELECT COUNT(*) AS Votes FROM users_restaurants WHERE restaurant_id=? AND votes=true;",
    [restaurant_id]
  );
  return results[0];
};

const addVoteRestaurant = async (restaurant_id) => {
  let [results] = await connection.query(
    "UPDATE users_restaurants SET votes=true WHERE restaurant_id=?",
    [restaurant_id]
  );
  return results;
};

const removeVoteRestaurant = async (restaurant_id) => {
  let [results] = await connection.query(
    "UPDATE users_restaurants SET votes=false WHERE restaurant_id=?",
    [restaurant_id]
  );
  return results;
};

module.exports = {
  retriveRestaurantVotes,
  addVoteRestaurant,
  removeVoteRestaurant,
};
