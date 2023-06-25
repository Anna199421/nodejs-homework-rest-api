const { HttpError } = require("../helpers");

const validateUserBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const errorMessage = error.details[0].message;
      next(HttpError(400, errorMessage));
    } else {
      next();
    }
  };
  return func;
};

module.exports = {
  validateUserBody,
};