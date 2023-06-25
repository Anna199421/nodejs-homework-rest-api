const {
    getAllContacts,
    getContactById,
    addContact,
    updateContactById,
    deleteContactById,
    updateStatusContact,
  } = require("./contacts");
  
  const {
    registerUser,
    loginUser,
    getCurrentUser,
    logoutUser,
  } = require("./users");
  module.exports = {
    getAllContacts,
    getContactById,
    addContact,
    updateContactById,
    deleteContactById,
    updateStatusContact,
    registerUser,
    loginUser,
    getCurrentUser,
    logoutUser,
  };