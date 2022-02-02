const restaurantRouter = require("express").Router();
const commentRouter = require("express").Router({ mergeParams: true });

const voteRouter = require("express").Router({ mergeParams: true });

const {
  commentController,
  restaurantController,
  voteController,
} = require("../controllers");

restaurantRouter.get("/", restaurantController.retrieveUsersRestaurants);

restaurantRouter.post("/", restaurantController.addNewRestaurant);

restaurantRouter.delete(
  "/:restaurantId",
  restaurantController.removeUserRestaurant
);

restaurantRouter.use("/:restaurantId/comments", commentRouter);

commentRouter.get("/", commentController.getRestaurantComments);

commentRouter.post("/", commentController.addNewComment);

commentRouter.patch("/:commentId", commentController.updateComment);

commentRouter.delete("/:commentId", commentController.eraseComment);

restaurantRouter.use("/:restaurantId/votes", voteRouter);

voteRouter.get("/", voteController.getRestaurantVotes);

module.exports = restaurantRouter;
