const path = require("path");
const fs = require("fs/promises");

const { User } = require("../../models");
const { controllersWrapper, processAvatar } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tmpUpload, originalname } = req.file;
  
  const [extention] = originalname.split(".").reverse();
  
  const newFileName = `${_id}.${extention}`;

  const resultUpload = path.join(avatarsDir, newFileName);

  await fs.rename(tmpUpload, resultUpload);

  const avatarUrl = path.join("avatars", newFileName);

  processAvatar(resultUpload);

  await User.findByIdAndUpdate(_id, { avatarUrl });

  res.json({ avatarUrl });
};

module.exports = { updateAvatar: controllersWrapper(updateAvatar) };