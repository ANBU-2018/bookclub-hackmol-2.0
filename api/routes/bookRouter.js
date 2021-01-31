var express = require("express");
var router = express.Router();
var bookController = require("./../controller/book");

router.route("/").get(bookController.getBooks).post(bookController.addBooks);
router.route("/genre").post(bookController.addgenre);
router
  .route("/chapters")
  .get(bookController.getchapters)
  .post(bookController.addchapters);

module.exports = router;
