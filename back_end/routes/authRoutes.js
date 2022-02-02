const authRouter = require("express").Router();
const { authController } = require("../controllers");
const { authMiddleware } = require("../middleware");

authRouter.post("/register", authController.registerUser);

authRouter.post("/login", authController.login);

authRouter.get("/logout", authMiddleware.validateToken, authController.logout);

module.exports = authRouter;
