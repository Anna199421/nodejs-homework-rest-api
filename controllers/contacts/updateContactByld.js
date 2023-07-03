const { HttpError, controllersWrapper } = require("../../helpers");

const { Contact } = require("../../models/contact/contact");

const updateContactById = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = { updateContactById: controllersWrapper(updateContactById) };