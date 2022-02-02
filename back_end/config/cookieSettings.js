const cookieJWT = {
  httpOnly: true,
  sameSite: "lax",
  maxAge: "1800000",
};

module.exports = {
  cookieJWT,
};
