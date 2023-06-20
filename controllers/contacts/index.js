const { getAllContacts } = require("./getAllContacts");
const { getContactById } = require("./getContactById");
const { addContact } = require("./addContact");
const { updateContactById } = require("./updateContactById");
const { deleteContactById } = require("./deleteContactById");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContactById,
  deleteContactById,
  updateStatusContact,
};