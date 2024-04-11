const {
  setByShopid
} = require("../controller/msg.controller");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    const shopid = req.body.shopid;
    cb(null,  shopid + "."+file.mimetype.split('/')[1]);
  }
});
const upload = multer({ storage: storage });
const router = require("express").Router();
// console.log(setByShopid.body)

router.post("/setDesc",upload.single('image'),setByShopid);


module.exports = router;
