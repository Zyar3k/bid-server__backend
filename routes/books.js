import express from "express";
const router = express.Router();

import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../controllers/books.js";

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").delete(deleteBook).patch(updateBook).get(getBook);

export default router;
