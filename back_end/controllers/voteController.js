const { voteModel } = require("../models");

const getRestaurantVotes = async (req, res, next) => {
  try {
    const results = await voteModel.retriveRestaurantVotes(
      req.params.restaurantId
    );
    if (!results) throw Error;
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const upvote = async (req, res, next) => {
  try {
    const update = await voteModel.addVoteRestaurant(req.params.restaurantId);
    if (!update || !update.changedRows) throw Error;
    res.status(200).json({ message: "Voted!" });
  } catch (err) {
    next(err);
  }
};

const downvote = async (req, res, next) => {
  try {
    const update = await voteModel.removeVoteRestaurant(
      req.params.restaurantId
    );
    if (!update || !update.changedRows) throw Error;
    res.status(200).json({ message: "Vote removed." });
  } catch (err) {
    next(err);
  }
};

module.exports = { getRestaurantVotes, upvote, downvote };
