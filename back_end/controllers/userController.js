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

module.exports = { retrieveUsers };
