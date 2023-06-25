const { Contact } = require("../../models/contact/contact");
const { controllersWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");
  console.log("Contact", Contact);
  res.json(result);
};

module.exports = { getAllContacts: controllersWrapper(getAllContacts) };