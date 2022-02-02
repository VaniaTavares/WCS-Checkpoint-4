const apiRouter = require("express").Router();
const restaurantRouter = require("./restaurantRoutes");
const userRouter = require("./userRoutes");

apiRouter.use("/restaurants", restaurantRouter);
apiRouter.use("/users", userRouter);
module.exports = apiRouter;
