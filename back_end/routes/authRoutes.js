const authRouter = require("express").Router();

authRouter.post("/register", authController.register);

// router.post("/login", asyncHandler(authController.login));

// router.get("/logout", authMiddleware, asyncHandler(authController.logout));

module.exports = authRouter;
