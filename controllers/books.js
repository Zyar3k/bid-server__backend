const getAllBooks = async (req, res) => {
  res.send("get all Books");
};

const getBook = async (req, res) => {
  res.send("get Book");
};

const createBook = async (req, res) => {
  res.send("create Book");
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
