const userRouter = require("express").Router();
const { userController } = require("../controllers");

userRouter.get("/", userController.retrieveUsers);

// router.post("/login", asyncHandler(authController.login));

// router.get("/logout", authMiddleware, asyncHandler(authController.logout));

module.exports = userRouter;
