const { userModel } = require("../models");

const registerUser = async (req, res, next) => {
  try {
    delete req.body.passwordConfirmation;
    const creation = await userModel.createUser(req.body);
    if (!creation.affectedRows) throw Error;
    res
      .status(201)
      .json({ id: creation.insertId, username: req.body.username });
  } catch (err) {
    next(err);
  }
};

module.exports = { registerUser };
