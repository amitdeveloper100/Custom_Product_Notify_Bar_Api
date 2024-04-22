const {
    setByShopid,
    getDesc
  } = require("./msg.controller");
  
  const router = require("express").Router();
  // console.log(setByShopid.body)
  
  router.post("/setDesc",setByShopid);
  
  router.get("/:shopid", getDesc);
  
  module.exports = router;
  