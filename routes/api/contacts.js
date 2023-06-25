const express = require("express");

const router = express.Router();

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const {
  addSchema,
  updateFavoriteSchema,
  updateContactSchema,
} = require("../../schemas/contacts");

const {
  getAllContacts,
  getContactById,
  addContact,
  updateContactById,
  updateStatusContact,
  deleteContactById,
} = require("../../controllers");

// встановлюємо middleware-функцію authenticate для всіх HTTP-запитів,
// які співпадають з маршрутом "/" яка перевіряє чи залогінений юзер.
router.use("/", authenticate);
router
  .route("/")
  .get(getAllContacts)
  .post(validateBody(addSchema, "Set name for contact"), addContact);

// встановлюємо middleware-функцію isValidId для всіх HTTP-запитів,
// які співпадають з маршрутом "/:contactId"яка перевіряє валідність id.
// та middleware-функцію authenticate
router.use("/:contactId", authenticate, isValidId);
router
  .route("/:contactId")
  .get(getContactById)
  .delete(deleteContactById)
  .put(validateBody(updateContactSchema, "missing fields"), updateContactById);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema, "missing field favorite"),
  updateStatusContact
);

module.exports = router;