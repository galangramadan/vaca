const express = require('express');
const {
  allBooks,
  bookById,
  addBook,
} = require('../controllers/book.controller');
const { verifyToken } = require('../middlewares/verifyToken');
const upload = require('../utils/multer');

const router = express.Router();

router.get('/', allBooks);
router.get('/:bookId', bookById);

router.post('/add', verifyToken, upload.single('image'), addBook);

module.exports = router;
