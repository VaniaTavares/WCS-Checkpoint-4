const { userModel } = require("../models");
const { cookieJWT } = require("../config/cookieSettings");
const { authHelper } = require("../helpers");

const registerUser = async (req, res, next) => {
  try {
    delete req.body.passwordConfirmation;
    const creation = await userModel.createUser(req.body);
    if (!creation.affectedRows) throw Error;
    const final = { id: creation.insertId, username: req.body.username };
    const token = authHelper.generateAcessToken(final);
    res
      .status(201)
      .cookie("token", token, { ...cookieJWT })
      .json(final);
  } catch (err) {
    next(err);
  }
};

module.exports = { registerUser };
