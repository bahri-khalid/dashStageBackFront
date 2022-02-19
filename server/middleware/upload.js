const util = require("util");
const multer = require("multer");
require('dotenv/config');
const { GridFsStorage } = require("multer-gridfs-storage");
const dbConfig = require("../config/db");
var storage = new GridFsStorage({
  url: process.env.MONGO_URL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg","image/jpg"];
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}${file.originalname}`;
      return filename;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}${file.originalname}`
    };
  }
});
var uploadFiles = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;