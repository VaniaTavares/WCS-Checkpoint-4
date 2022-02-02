const authRouter = require("express").Router();
const { authController } = require("../controllers");

authRouter.post("/register", authController.registerUser);

// router.post("/login", asyncHandler(authController.login));

// router.get("/logout", authMiddleware, asyncHandler(authController.logout));

module.exports = authRouter;
