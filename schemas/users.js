const Joi = require("joi");
const { emailRegexp } = require("../helpers");

const registrationSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base": "Invalid email format",
    "any.required": "Email is a required field",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must contain at least 6 characters",
    "any.required": "Set password for user",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base": "Invalid email format",
    "any.required": "Email is a required field",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is a required field",
  }),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base": "Invalid email format",
    "any.required": "missing required field email",
  }),
});

module.exports = { registrationSchema, loginSchema, emailSchema };