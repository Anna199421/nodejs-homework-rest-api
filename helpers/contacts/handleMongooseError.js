const handleMongooseError = (err, data, next) => {
    const { code, name } = err;
  
    const status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  
    err.status = status;
    err.message = "email must be unique!";
    next();
  };
  
  module.exports = {
    handleMongooseError,
  };