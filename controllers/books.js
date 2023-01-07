const Book = require("../models/Book");
const { StatusCodes } = require("http-status-codes");

const getAllBooks = async (req, res) => {
  res.send("get all Books");
};

const getBook = async (req, res) => {
  res.send("get Book");
};

const createBook = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};

const updateBook = async (req, res) => {
  res.send("update Book");
};

const deleteBook = async (req, res) => {
  res.send("delete Book");
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
