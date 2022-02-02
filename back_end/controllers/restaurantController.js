const { restaurantModel } = require("../models");

const retrieveUsersRestaurants = async (req, res, next) => {
  try {
    const results = await restaurantModel.getAllRestaurants(req.user_id);
    if (!results) throw Error;
    if (!results.length) throw new Error("NO_RECORD_FOUND");
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const addNewRestaurant = async (req, res, next) => {
  let creation = null;
  try {
    const existingRestaurant = await restaurantModel.getRestaurantById(
      req.body.id
    );
    if (!existingRestaurant) {
      creation = await restaurantModel.createRestaurantEntry(req.body);
      if (!creation) throw Error;
    }
    const success = await restaurantModel.crossReferenceUserRestaurant(
      req.user_id,
      req.body.id
    );
    if (!success || !success.affectedRows) throw Error;
    if (success.affectedRows)
      res.status(201).json({ message: "Restaurant added to Personal List." });
  } catch (err) {
    next(err);
  }
};

const removeUserRestaurant = async (req, res, next) => {
  try {
    const deletion = await restaurantModel.crossRestaurantDelete(
      req.user_id,
      req.params.restaurantId
    );
    if (!deletion || !deletion.affectedRows) throw Error;
    res.status(200).json({ message: "Restaurant removed from wishlist list." });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  retrieveUsersRestaurants,
  addNewRestaurant,
  removeUserRestaurant,
};
