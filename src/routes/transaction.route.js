const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken');
const {
  newTransactions,
  transactionById,
  transactionByUserId,
  allTransactions,
  transactionStatus,
  pendingTransactionByUserId,
} = require('../controllers/transaction.controller');
const { newSubscription } = require('../controllers/subscription.controller');

const router = express.Router();

router.post('/new/:pricingId', verifyToken, newTransactions);
router.get('/id/:transactionId', verifyToken, transactionById);
router.get('/user/:userId', verifyToken, transactionByUserId);
router.get('/user/:userId/pending', verifyToken, pendingTransactionByUserId);
router.get('/all', verifyToken, allTransactions);
router.put(
  '/id/:transactionId',
  verifyToken,
  transactionStatus,
  newSubscription
);

module.exports = router;
