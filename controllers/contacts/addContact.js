const { controllersWrapper } = require("../../helpers");

const { Contact } = require("../../models/contact/contact");

const addContact = async (req, res) => {

  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
};

module.exports = { addContact: controllersWrapper(addContact) };