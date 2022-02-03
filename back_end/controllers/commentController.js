const { commentModel } = require("../models");

const getRestaurantComments = async (req, res, next) => {
  try {
    let results = await commentModel.retriveComments(req.params.restaurantId);
    if (!results) throw Error;
    if (!results.length) throw new Error("NO_RECORD_FOUND");
    if (req.cookies.token) {
      results = results.map((comment) => {
        const newContent = { ...comment };
        if (newContent.user_id === req.user_id) newContent.editable = true;
        return newContent;
      });
    }
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

const updateComment = async (req, res, next) => {
  try {
    const update = await commentModel.updateComment(
      req.body,
      req.params.commentId
    );
    if (!update) throw Error;
    const message = update.changedRows ? "Comment updated!" : "No update.";
    res.status(200).json({ message });
  } catch (err) {
    next(err);
  }
};

const eraseComment = async (req, res, next) => {
  try {
    const deletion = await commentModel.deleteComment(req.params.commentId);
    if (!deletion || !deletion.affectedRows) throw Error;
    res.status(204).json({ message: "Record deleted" });
  } catch (err) {
    next(err);
  }
};

const getAllComments = async (req, res, next) => {
  try {
    const results = await commentModel.retriveComments(null, true);
    if (!results) throw Error;
    if (!results.length) throw new Error("NO_RECORD_FOUND");
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getRestaurantComments,
  getAllComments,
  addNewComment,
  updateComment,
  eraseComment,
};
