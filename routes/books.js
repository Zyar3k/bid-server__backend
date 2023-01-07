const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  createBook,
  deleteBook,
  getBook,
  updateBook,
} = require("../controllers/books");

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").delete(deleteBook).patch(updateBook).get(getBook);

module.exports = router;
