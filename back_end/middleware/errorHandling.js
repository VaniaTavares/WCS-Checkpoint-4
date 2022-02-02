const options = {
  NO_RECORD_FOUND: {
    status: 404,
    id: "da969facdb",
    message: "No information meets the requirements.",
  },
  EXISTING_EMAIL: {
    status: 409,
    message: "There's an user with that email.",
  },
  NOT_AUTHENTICATED: {
    status: 401,
    id: "d29e6e6b32",
    message: "Must login.",
  },
  INVALID_CREDENTIALS: {
    status: 401,
    id: "a1ad74be99",
    message: "Invalid credentials.",
  },
  NO_USER: {
    status: 400,
    id: "f9234595e4",
    message: "There's no user with the email provided.",
  },
  BLOCKED: {
    status: 403,
    id: "64c244513c",
    message: "Wait for admin contact.",
  },
  NOT_AUTHORIZED: {
    status: 403,
    id: "b96315306b",
    message: "Not authorized to access to take this action.",
  },
};

const handleError = (err, req, res, next) => {
  if (err) {
    console.log(err);
    const treatedError = err.toString().slice(7);
    if (treatedError === "INVALID_DATA")
      res.status(422).json(req.validationErrors);
    else if (options.hasOwnProperty(treatedError)) {
      const { status, message, id } = options[treatedError];
      res.status(status).json({ id, message });
    } else
      res.status(500).send({ id: "6882d71320", message: "Internal issues" });
  } else {
    next();
    return;
  }
};

module.exports = { handleError };
