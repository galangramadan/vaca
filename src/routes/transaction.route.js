const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken');
const { newTransactions } = require('../controllers/transaction.controller');

const router = express.Router();

router.post('/new/:pricingId', verifyToken, newTransactions);

module.exports = router;
