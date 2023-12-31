const express = require('express');
const {
  allBooks,
  bookById,
  bookByTitle,
  addBook,
  allCategories,
  bookByCategories,
  deleteBook,
  updateBook,
  readBook,
} = require('../controllers/book.controller');
const { verifyToken } = require('../middlewares/verifyToken');
const upload = require('../utils/multer');

const router = express.Router();

router.get('/', allBooks);
router.get('/id/:bookId', bookById);
router.get(`/search`, bookByTitle);
router.get('/categories', allCategories);
router.get('/categories/:name', bookByCategories);
router.get('/read/:bookId', verifyToken, readBook);
router.put('/update', verifyToken, updateBook);
router.delete(`/id/:bookId`, verifyToken, deleteBook);
router.post('/add', verifyToken, upload.single('image'), addBook);

module.exports = router;
