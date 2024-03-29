const jwt = require("jsonwebtoken");

const TOKEN_KEY = process.env.TOKEN_KEY;

const validateToken = (req, res, next) => {
  try {
    if (
      !req.cookies.token &&
      (req.originalUrl.includes("comments") ||
        req.originalUrl.includes("votes")) &&
      req.method === "GET"
    ) {
      next();
      return;
    } else if (!req.cookies.token) throw new Error("NOT_AUTHENTICATED");
    else {
      const match = jwt.verify(req.cookies.token, TOKEN_KEY);
      if (!match) throw new Error("INVALID_CREDENTIALS");
      req.user_id = match.id;
      next();
      return;
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { validateToken };
