var express = require("express");
const { auth } = require("neo4j-driver");
var router = express.Router();
var authController = require("./../controller/authentication");

router.post("/signup", authController.adduser);
router.post("/login", authController.postLogin);

module.exports = router;
