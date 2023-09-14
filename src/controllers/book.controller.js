const { Op } = require('sequelize');
const { books, users, categories, subscriptions } = require('../models');
const cloudinary = require('../utils/cloudinary');

const addBook = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, author, description, content, category_id } = req.body;

    const user = await users.findOne({
      where: { id: userId },
    });

    if (user.role !== 'admin')
      return res.status(403).send({
        message: 'forbidden, only admin can access',
      });

    if (
      !title ||
      !req.file.path ||
      !author ||
      !description ||
      !content ||
      !category_id
    )
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
      content: content,
      category_id: category_id,
    });

    res.status(201).send({
      messsage: 'book added successfully',
    });
  } catch (error) {
    res.status(500).send({
      message: 'something went wrong',
      data: error,
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
      data: {
        id: result.id,
        title: result.title,
        image: result.image,
        author: result.author,
        description: result.description,
        category_id: result.category_id,
      },
    });
  } catch (error) {
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
    });
  }
};

const bookByTitle = async (req, res) => {
  try {
    const bookQuery = req.query.title;

    const result = await books.findAll({
      where: { title: { [Op.substring]: bookQuery } },
    });

    if (result == null)
      return res.status(404).send({
        message: 'data not found',
        data: result,
      });

    const data = result.map((elm) => {
      return {
        id: elm.id,
        title: elm.title,
        image: elm.image,
        author: elm.author,
        description: elm.description,
        category_id: elm.category_id,
      };
    });

    return res.status(200).send({
      message: 'data retrieved successfully',
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
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
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
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
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookId = parseInt(req.params.bookId);

    const user = await users.findOne({
      where: { id: userId },
    });

    if (user.role != 'admin')
      return res.status(403).send({
        message: 'forbidden, only admin can delete book',
      });

    const result = await books.findOne({
      where: { id: bookId },
    });

    if (result == null)
      return res.status(404).send({
        message: 'data not found',
        data: result,
      });

    const deletedItem = await books.destroy({
      where: { id: bookId },
    });

    return res.status(200).send({
      message: 'book deleted successfully',
      data: deletedItem,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id, title, author, description, content, category_id } = req.body;

    const user = await users.findOne({
      where: { id: userId },
    });

    if (user.role != 'admin')
      return res.status(403).send({
        message: 'forbidden, only admin can update book',
      });

    if (!id || !title || !author || !description || !content || !category_id)
      return res.status(400).send({
        message: 'all field must be filled!',
      });

    const updatedBooks = await books.update(
      {
        title: title,
        author: author,
        description: description,
        content: content,
        category_id: category_id,
      },
      {
        where: { id: id },
      }
    );

    return res.status(201).send({
      message: 'Data successfully updated',
    });
  } catch (error) {
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
    });
  }
};

const readBook = async (req, res) => {
  try {
    const bookId = parseInt(req.params.bookId);
    const userId = req.user.id;

    const subscription = await subscriptions.findAll({
      where: { user_id: userId },
    });

    if (subscription.length < 1)
      return res.status(403).send({
        message: 'you do not have active subscription',
      });

    const result = await books.findOne({
      where: { id: bookId },
    });

    return res.status(200).send({
      message: 'data retrieved successfully',
      data: result.content,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
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
  updateBook,
  readBook,
};
