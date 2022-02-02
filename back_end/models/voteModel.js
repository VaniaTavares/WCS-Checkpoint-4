const connection = require("../config/db");

const retriveRestaurantVotes = async (restaurant_id) => {
  let [results] = await connection.query(
    "SELECT COUNT(*) AS Votes FROM users_restaurants WHERE restaurant_id=? AND votes=true;",
    [restaurant_id]
  );
  return results[0];
};

module.exports = { retriveRestaurantVotes };
