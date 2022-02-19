const {Router} = require("express")
const mongoose  = require("mongoose")
const crypto = require("crypto");
const multer = require("multer");
var path = require('path');
const {GridFsStorage} = require("multer-gridfs-storage");
require('dotenv/config');
const productRouters = require("../controllers/producController")
const router = new Router()


const conn = mongoose.connection;
// init gfs
let gfs;
conn.once('open',() => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  });
});

//create storage object
const storage = new GridFsStorage({
    url:process.env.MONGO_URL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
          if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'products'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

router.post("/upload", upload.single("file"), (req, res) => {
    console.log("in the post ")
    console.log(req )
    // res.json({file : req.file})
    res.redirect("/");
  });

router.get("/products",productRouters.get_products)
router.get("/productsMng/:id",productRouters.oneProd)
router.post("/addProduct",upload.single("file"),productRouters.addProduct)
module.exports = router