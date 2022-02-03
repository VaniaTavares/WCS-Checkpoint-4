const { userModel } = require("../models");
const { cookieJWT } = require("../config/cookieSettings");
const { authHelper, userHelper } = require("../helpers");
const { validateUser } = require("../validation/userValition");

const registerUser = async (req, res, next) => {
  try {
    const validationErrors = validateUser(req.body);
    if (validationErrors) {
      req.validationErrors = validationErrors.details;
      throw new Error("INVALID_DATA");
    }
    const creation = await userModel.createUser(req.body);
    if (!creation.affectedRows) throw Error;
    const final = { id: creation.insertId, username: req.body.username };
    const token = authHelper.generateAcessToken(final);
    res
      .status(201)
      .cookie("loggedIn", req.body.username)
      .cookie("token", token, { ...cookieJWT })
      .json(final);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await userModel.getUserByEmail(req.body.email);
    if (!user) throw new Error("NO_USER");
    const match = await userHelper.verifyPassword(
      req.body.password,
      user.hashed_password
    );
    if (!match) throw new Error("INVALID_CREDENTIALS");
    else {
      const final = { id: user.id, username: user.username };
      const token = authHelper.generateAcessToken(final);
      res
        .status(200)
        .cookie("token", token, { ...cookieJWT })
        .json(final);
    }
  } catch (err) {
    next(err);
  }
};

const logout = (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "Successfully logged out" });
};
module.exports = { registerUser, login, logout };
