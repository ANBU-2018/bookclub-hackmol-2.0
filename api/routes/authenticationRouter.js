var express = require("express");
var router = express.Router();
var authController = require("./../controller/authentication");

router.route("/signup").post(authController.adduser);
router.route("/login").post(authController.postLogin);

module.exports = router;
