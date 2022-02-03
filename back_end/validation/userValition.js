const Joi = require("joi");

const validateUser = (data) => {
  return Joi.object({
    email: Joi.string().email().max(80).required(),
    username: Joi.string()
      .regex(new RegExp("^[A-Za-z0-9-_.*#&!?$%@]+$"))
      .max(30)
      .messages({
        "string.pattern.base":
          "Only letters, numbers and special characters @, &, !, ?, ., -, *, #, $, %, _ allowed for the username.",
      })
      .required(),
    password: Joi.string()
      .regex(new RegExp("^[A-Za-z0-9-_.*#&!?$%@]+$"))
      .min(8)
      .max(20)
      .messages({
        "string.pattern.base":
          "Only letters, numbers and special characters @, &, !, ?, ., -, *, #, $, %, _ allowed for the password.",
      })
      .required(),
    passwordConfirmation: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .strict()
      .messages({ "any.only": "Must match with password input." }),
  }).validate(data, { abortEarly: false }).error;
};

const validateComment = (data) => {
  return Joi.object({
    comment: Joi.string()
      .regex(new RegExp("^[A-Za-z0-9-_.!?€$%@]+$"))
      .min(8)
      .max(20)
      .messages({
        "string.pattern.base":
          "Only letters, numbers and special characters @, !, ?, ., -, $, €, %, _ allowed for the comment.",
      })
      .required(),
  }).validate(data, { abortEarly: false }).error;
};

module.exports = {
  validateUser,
  validateComment,
};
