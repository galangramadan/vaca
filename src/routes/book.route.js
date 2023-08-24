const express = require('express');
const {
  allBooks,
  bookById,
  addBook,
} = require('../controllers/book.controller');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/', allBooks);
router.get('/:bookId', bookById);

router.post('/add', verifyToken, addBook);

module.exports = router;
