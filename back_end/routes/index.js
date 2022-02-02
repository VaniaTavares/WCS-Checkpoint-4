const apiRouter = require("express").Router();
const userRouter = require("./userRoutes");

apiRouter.use("/users", userRouter);
module.exports = apiRouter;
