const { restaurantModel } = require("../models");

const retrieveUsersRestaurants = async (req, res, next) => {
  try {
    const results = await restaurantModel.getAllRestaurants(req.user_id);
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const addNewRestaurant = async (req, res, next) => {
  try {
    const results = await restaurantModel.createRestaurantEntry(req.body);
  } catch (err) {
    next(err);
  }
};

module.exports = { retrieveUsersRestaurants, addNewRestaurant };
