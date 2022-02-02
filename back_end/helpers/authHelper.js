const jwt = require("jsonwebtoken");

const TOKEN_KEY = process.env.TOKEN_KEY;

const generateAcessToken = ({ id, username }) => {
  return jwt.sign({ id, username }, TOKEN_KEY, {
    expiresIn: "1810000",
  });
};

module.exports = { generateAcessToken };
