const express = require("express");

const router = express.Router();

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const {
  addSchema,
  updateFavoriteSchema,
  updateContactSchema,
} = require("../../schemas");

const {
  getAllContacts,
  getContactById,
  addContact,
  updateContactById,
  updateStatusContact,
  deleteContactById,
} = require("../../controllers");


router.use("/", authenticate);
router
  .route("/")
  .get(getAllContacts)
  .post(validateBody(addSchema, "Set name for contact"), addContact);


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