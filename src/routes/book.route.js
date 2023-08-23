const express = require('express');
const { all } = require('../controllers/book.controller');

const router = express.Router();

router.get('/', all);

module.exports = router;
