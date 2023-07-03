const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  updateAvatar,
} = require("../../controllers");

const { validateUserBody, authenticate, upload } = require("../../middlewares");
const { registrationSchema, loginSchema } = require("../../schemas/users");

// signup
router.post("/register", validateUserBody(registrationSchema), registerUser);

// signin
router.post("/login", validateUserBody(loginSchema), loginUser);

// get current
router.get("/current", authenticate, getCurrentUser);

// logout
router.post("/logout", authenticate, logoutUser);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;