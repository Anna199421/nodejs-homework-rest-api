const { HttpError, controllersWrapper } = require("../../helpers");

const { Contact } = require("../../models/contact/contact");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const currentContact = await Contact.findById(contactId);
  if (!currentContact) {
    throw HttpError(404, "Not found");
  }
  if (currentContact.favorite === req.body.favorite) {
    throw HttpError(
      400,
      "Favorite value is already set to the specified value"
    );
  }
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  updateStatusContact: controllersWrapper(updateStatusContact),
};