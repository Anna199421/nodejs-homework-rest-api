const { HttpError, controllersWrapper } = require("../helpes");

const {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../models/contacts");

const getAllContacts = async (req, res) => {
  const result = await getContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  res.json(result);
  if (!result) {
    throw HttpError(404, "Not found");
  }
};

const add = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = {
  getAllContacts: controllersWrapper(getAllContacts),
  getById: controllersWrapper(getById),
  add: controllersWrapper(add),
  updateById: controllersWrapper(updateById),
  deleteById: controllersWrapper(deleteById),
};