const apiRouter = require("express").Router();
const adminRouter = require("./adminRoutes");
const restaurantRouter = require("./restaurantRoutes");
const userRouter = require("./userRoutes");

const { authMiddleware } = require("../middleware");

apiRouter.use("/admin", adminRouter);
apiRouter.use("/restaurants", authMiddleware.validateToken, restaurantRouter);
apiRouter.use("/users", authMiddleware.validateToken, userRouter);

module.exports = apiRouter;
