const express = require('express');
const {
  subscriptionById,
  subscriptionByIdAndStatus,
} = require('../controllers/subscription.controller');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/:userId', verifyToken, subscriptionById);
router.get('/:userId/sort', verifyToken, subscriptionByIdAndStatus);

module.exports = router;
