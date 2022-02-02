const { commentModel } = require("../models");

const getRestaurantComments = async (req, res, next) => {
  try {
    const results = await commentModel.retriveRestaurantComments(
      req.params.restaurantId
    );
    if (!results) throw Error;
    if (!results.length) throw new Error("NO_RECORD_FOUND");
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const addNewComment = async (req, res, next) => {
  try {
    const creation = await commentModel.createNewComment({
      user_id: req.user_id,
      restaurant_id: req.params.restaurantId,
      comment: req.body.comment,
    });
    if (!creation || !creation.affectedRows) throw Error;
    res.status(201).json({ message: "New Comment Posted!" });
  } catch (err) {
    next(err);
  }
};
module.exports = { getRestaurantComments, addNewComment };
