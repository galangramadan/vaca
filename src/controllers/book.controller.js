const { books, users, categories } = require('../models');
const cloudinary = require('../utils/cloudinary');

const addBook = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, author, description, category_id } = req.body;

    const user = await users.findOne({
      where: { id: userId },
    });

    if (user.role !== 'admin')
      return res.status(403).send({
        message: 'forbidden, only admin can access',
      });

    if (!title || !req.file.path || !author || !description || !category_id)
      return res.status(400).send({
        message: 'all field must be filled!',
      });

    const category = await categories.findOne({
      where: { id: category_id },
    });

    if (category == null)
      return res.status(404).send({
        message: 'category not found',
      });

    const result = await cloudinary.uploader.upload(req.file.path);

    await books.create({
      title: title,
      image: result.secure_url,
      author: author,
      description: description,
      category_id: category_id,
    });

    res.status(201).send({
      messsage: 'book added successfully',
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

const allBooks = async (req, res) => {
  try {
    const result = await books.findAll();

    return res.status(200).send({
      message: 'data retrieved successfully',
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      message: error,
    });
  }
};

const bookById = async (req, res) => {
  try {
    const bookId = parseInt(req.params.bookId);

    const result = await books.findOne({
      where: { id: bookId },
    });

    if (result == null)
      return res.status(404).send({
        message: 'data not found',
        data: result,
      });

    return res.status(200).send({
      message: 'data retrieved successfully',
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      message: error,
    });
  }
};

const bookByTitle = async (req, res) => {
  try {
    const bookQuery = req.query.title;

    const result = await books.findOne({
      where: { title: bookQuery },
    });

    if (result == null)
      return res.status(404).send({
        message: 'data not found',
        data: result,
      });

    return res.status(200).send({
      message: 'data retrieved successfully',
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      message: error,
    });
  }
};

const allCategories = async (req, res) => {
  try {
    const result = await categories.findAll();

    return res.status(200).send({
      message: 'data retrieved successfully',
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      message: error,
    });
  }
};

const bookByCategories = async (req, res) => {
  try {
    const categoryName = String(req.params.name);
    const categoryId = await categories.findOne({
      where: { name: categoryName },
    });

    const result = await books.findAll({
      where: { category_id: categoryId.id },
    });

    if (result == null)
      return res.status(404).send({
        message: 'data not found',
        data: result,
      });

    return res.status(200).send({
      message: 'data retrieved successfully',
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      message: error,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = parseInt(req.params.bookId);

    const result = await books.findOne({
      where: { id: bookId },
    });

    if (result == null)
      return res.status(404).send({
        message: 'data not found',
        data: result,
      });

    return res.status(200).send({
      message: 'data retrieved successfully',
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      message: error,
    });
  }
};

module.exports = {
  allBooks,
  bookById,
  bookByTitle,
  addBook,
  allCategories,
  bookByCategories,
  deleteBook,
};
