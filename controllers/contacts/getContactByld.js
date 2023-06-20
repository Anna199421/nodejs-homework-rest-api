const { HttpError, controllersWrapper } = require("../../helpers");

const { Contact } = require("../../models/contact");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  res.json(result);
  if (!result) {
    throw HttpError(404, "Not found");
  }
};

module.exports = { getContactById: controllersWrapper(getContactById) };