const { controllersWrapper } = require("../../helpers");

const getCurrentUser = async (req, res) => {
  const { email, subscription } = req.user;
  res.json({
    email,
    subscription,
  });
};

module.exports = { getCurrentUser: controllersWrapper(getCurrentUser) };