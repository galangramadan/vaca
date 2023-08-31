const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken');
const {
  newTransactions,
  transactionById,
} = require('../controllers/transaction.controller');

const router = express.Router();

router.post('/new/:pricingId', verifyToken, newTransactions);
router.get('/id/:transactionId', verifyToken, transactionById);

module.exports = router;
