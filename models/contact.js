const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { phoneNumberValidation } = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      match: phoneNumberValidation,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionkey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("Contact", contactSchema);

module.exports = {
  Contact,
};