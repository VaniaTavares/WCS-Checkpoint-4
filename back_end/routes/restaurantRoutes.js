const restaurantRouter = require("express").Router();
const { restaurantController } = require("../controllers");

restaurantRouter.get("/", restaurantController.retrieveUsersRestaurants);

restaurantRouter.post("/", restaurantController.addNewRestaurant);

restaurantRouter.delete(
  "/:restaurantId",
  restaurantController.removeUserRestaurant
);

module.exports = restaurantRouter;
