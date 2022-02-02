const { userModel } = require("../models");

const retrieveUsers = async (req, res, next) => {
  try {
    const results = await userModel.getAllUsers();
    if (!results) throw Error;
    if (!results.length) throw new Error("NO_RECORD_FOUND");

    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const results = await userModel.getUserById(req.params.id);
    if (!results) throw new Error("NO_RECORD_FOUND");
    delete req.body.passwordConfirmation;
    const update = await userModel.updatePassword(req.body, req.params.id);
    if (!update) throw Error;
    res.status(200).json({ message: "Password update successful." });
  } catch (err) {
    next(err);
  }
};

module.exports = { retrieveUsers, resetPassword };
