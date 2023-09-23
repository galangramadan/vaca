const express = require('express');
const { verifyToken } = require('../middlewares/verifyToken');
const {
  allPricing,
  pricingById,
  updatePricing,
} = require('../controllers/pricing.controller');

const router = express.Router();

router.get('/', allPricing);
router.get('/id/:pricingId', pricingById);
router.put(`/update/id/:pricingId`, verifyToken, updatePricing);

module.exports = router;
