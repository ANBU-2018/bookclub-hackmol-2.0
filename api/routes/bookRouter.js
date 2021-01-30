var express = require("express");
var router = express.Router();
var bookController = require("./../controller/book");

router.route("/").get(bookController.getBooks).post(bookController.addBooks);

module.exports = router;
