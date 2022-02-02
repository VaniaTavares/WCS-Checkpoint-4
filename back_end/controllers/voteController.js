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

module.exports = { getRestaurantVotes };
