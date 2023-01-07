import Book from "../models/Book.js";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import NotFoundError from "../errors/not-found.js";
import BadRequestError from "../errors/bad-request.js";

export const getAllBooks = async (req, res) => {
  const books = await Book.find().sort("createdAt");
  res.status(StatusCodes.OK).json(books);
};

export const getBook = async (req, res) => {
  const {
    //   user: { userId }, // optional, later
    params: { id: bookId },
  } = req;
  if (!mongoose.Types.ObjectId.isValid(bookId))
    return res.status(404).json({ msg: `No book with id :${bookId}` });

  const book = await Book.findOne({ _id: bookId });
  if (!book) {
    throw new NotFoundError(`Book with id ${bookId} not found`);
  }
  res.status(StatusCodes.OK).json({ book });
};

export const createBook = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};

export const updateBook = async (req, res) => {
  const {
    body: {
      title,
      author,
      page,
      link,
      list,
      readed,
      available,
      desc,
      adminRating,
      rating,
    },
    params: { id: bookId },
  } = req;

  if (!title) {
    throw new BadRequestError("Title is required");
  }

  const book = await Book.findOneAndUpdate(
    { _id: bookId },
    {
      title,
      author,
      page,
      link,
      list,
      readed,
      available,
      desc,
      adminRating,
      rating,
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ book });
};

export const deleteBook = async (req, res) => {
  res.send("delete Book");
};
