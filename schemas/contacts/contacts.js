const Joi = require("joi");
const { phoneNumberValidation } = require("../../helpers");

const addSchema = Joi.object({
  name: Joi.string().min(3).max(16).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(phoneNumberValidation).required(),
  favorite: Joi.boolean(),
});

const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(16),
  email: Joi.string().email(),
  phone: Joi.string().pattern(phoneNumberValidation),
  favorite: Joi.boolean(),
}).or("name", "email", "phone");

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  updateContactSchema,
  updateFavoriteSchema,
};