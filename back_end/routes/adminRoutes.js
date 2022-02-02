const adminRouter = require("express").Router();

const {
  commentController,
  userController,
  restaurantController,
} = require("../controllers");

adminRouter.get("/users", userController.retrieveUsers);

adminRouter.get("/restaurants", restaurantController.retrieveRestaurants);

adminRouter.get("/comments", commentController.getAllComments);

module.exports = adminRouter;
