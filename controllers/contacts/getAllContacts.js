const { Contact } = require("../../models/contact");
const { controllersWrapper } = require("../../helpers");

const getAllContacts = async (_, res) => {
  const result = await Contact.find();
  console.log("Contact", Contact);
  res.json(result);
};

module.exports = { getAllContacts: controllersWrapper(getAllContacts) };