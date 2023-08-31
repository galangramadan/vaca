const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken');
const {
  allPricing,
  updatePricing,
} = require('../controllers/pricing.controller');

const router = express.Router();

router.get('/', allPricing);
router.put('/update', verifyToken, updatePricing);

module.exports = router;
