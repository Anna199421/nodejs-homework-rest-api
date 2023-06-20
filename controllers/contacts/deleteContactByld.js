const { HttpError, controllersWrapper } = require("../../helpers");

const { Contact } = require("../../models/contact");

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = { deleteContactById: controllersWrapper(deleteContactById) };