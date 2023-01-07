require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;

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
