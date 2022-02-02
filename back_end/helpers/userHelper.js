const bcrypt = require("bcrypt");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    throw Error;
  }
};

const verifyPassword = async (password, hashedPassword) => {
  let matchFound;
  try {
    matchFound = await bcrypt.compare(password, hashedPassword);
    if (!matchFound) return false;
    else return matchFound;
  } catch (err) {
    console.log(err);
    throw Error;
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
};
