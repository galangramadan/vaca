const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken');
const {
  newTransactions,
  transactionById,
  transactionByUserId,
  allTransactions,
} = require('../controllers/transaction.controller');

const router = express.Router();

router.post('/new/:pricingId', verifyToken, newTransactions);
router.get('/id/:transactionId', verifyToken, transactionById);
router.get('/user/:userId', verifyToken, transactionByUserId);
router.get('/all', verifyToken, allTransactions);

module.exports = router;
