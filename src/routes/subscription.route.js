const express = require('express');
const { subscriptionById } = require('../controllers/subscription.controller');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/:userId', verifyToken, subscriptionById);

module.exports = router;
