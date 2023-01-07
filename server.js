import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";
import connectDB from "./db/connect.js";
const app = express();
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6tpkm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 8888;

import authRouter from "./routes/auth.js";
import booksRouter from "./routes/books.js";

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

mongoose.set("strictQuery", true);
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(express.json());
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use("/admin/auth", authRouter);
app.use("/admin/books", booksRouter);

app.use("/", booksRouter);

const start = async () => {
  try {
    await connectDB(mongoUri);
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
