const connection = require("../config/db");

const createNewComment = async (body) => {
  let [results] = await connection.query("INSERT INTO comments SET ?", {
    ...body,
  });
  return results;
};

const retriveRestaurantComments = async (restaurant_id) => {
  let [results] = await connection.query(
    "SELECT * FROM comments WHERE restaurant_id=?",
    [restaurant_id]
  );
  return results;
};

module.exports = {
  createNewComment,
  retriveRestaurantComments,
};
