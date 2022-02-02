const connection = require("../config/db");
const { userHelper } = require("../helpers");

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

const createUser = async ({ password, ...body }) => {
  const hashed_password = await userHelper.hashPassword(password);
  let [results] = await connection.query("INSERT INTO users SET ?;", {
    hashed_password,
    ...body,
  });
  return results;
};

const updatePassword = async ({ password }, id) => {
  const hashed_password = await userHelper.hashPassword(password);
  let [results] = await connection.query(
    "UPDATE users SET hashed_password = ? WHERE id=?;",
    [hashed_password, id]
  );
  return results.affectedRows;
};

module.exports = { getAllUsers, getUserById, createUser, updatePassword };
