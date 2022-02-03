const connection = require("../config/db");

const createNewComment = async (body) => {
  let [results] = await connection.query("INSERT INTO comments SET ?", {
    ...body,
  });
  return results;
};

const retriveComments = async (restaurant_id, admin = false) => {
  let results;
  let sql =
    "SELECT comment_id, comment, date, user_id, username FROM comments c JOIN users u ON c.user_id=u.id ";
  if (admin) {
    results = await connection.query(sql);
  } else {
    sql += "WHERE restaurant_id=?";
    results = await connection.query(sql, [restaurant_id]);
  }
  return results[0];
};

const updateComment = async ({ comment }, commentId) => {
  const comment_id = parseInt(commentId);
  let [results] = await connection.query(
    "UPDATE comments SET ? WHERE comment_id=?",
    [{ comment }, comment_id]
  );
  return results;
};

const deleteComment = async (comment_id) => {
  let [results] = await connection.query(
    "DELETE FROM comments WHERE comment_id=?",
    [comment_id]
  );
  return results;
};

module.exports = {
  createNewComment,
  retriveComments,
  updateComment,
  deleteComment,
};
