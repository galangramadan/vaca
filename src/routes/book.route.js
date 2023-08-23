const express = require('express');
const { book } = require('../controllers/book.controller');

const router = express.Router();

router.get('/', book);

module.exports = router;
