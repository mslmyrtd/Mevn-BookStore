import Book from "../models/Book.js";

const getAllBooks = (req, res) => {
  console.log("get allbook");
};

const createBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const existingBook = await Book.findOne({ title, author });

    if (existingBook) {
      return res
        .status(400)
        .json({ error: "A book with same title and author already exist!" });
    }
    const newBook = await Book.create(req.body);
    return res
      .status(201)
      .json({ message: "Book created succesfully", book: newBook });
  } catch (error) {
    if (error.name == "ValidationError") {
      const validationErrors = {};

      for (let field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }
      return res
        .status(400)
        .json({ error: "Validation error", validationErrors });
    } else {
      console.log("Error at creating book", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
export { getAllBooks, createBook };
