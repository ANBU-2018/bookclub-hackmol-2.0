var express = require("express");
const { use } = require(".");
var router = express.Router();
var userController = require("./../controller/user");

/* GET users listing. */
router
  .route("/preference")
  .post(userController.addPrefrences)
  .delete(userController.removePrefrences);
router
  .route("/favourite")
  .post(userController.addfavourite)
  .delete(userController.deletefavourite);

module.exports = router;
