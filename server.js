require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;

const authRouter = require("./routes/auth");
const booksRouter = require("./routes/books");

const notFoundMiddleware = require("./middleware/not-found.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");

app.use(express.json());

app.use("/admin/auth", authRouter);
app.use("/admin/books", booksRouter);

app.use("/", booksRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
