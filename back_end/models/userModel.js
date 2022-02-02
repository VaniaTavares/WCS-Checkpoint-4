const connection = require("../config/db");

const getAllUsers = async () => {
  let [results] = await connection.query(
    "SELECT id, username, email, status, last_access FROM users;"
  );
  return results;
};

const getUserById = async (id) => {
  let [results] = await connection.query(
    "SELECT username, email, status, last_access FROM users WHERE id=?;",
    [id]
  );
  return results[0];
};

module.exports = { getAllUsers, getUserById };
