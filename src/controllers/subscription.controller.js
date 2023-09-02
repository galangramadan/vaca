const { transactions, pricing, users, subscriptions } = require('../models');

const newSubscription = async (req, res) => {
  try {
    const userId = req.user.id;

    const pricingDetail = await pricing.findOne({
      where: { id: req.transaction.pricing_id },
    });

    const expiryDate = new Date();

    expiryDate.setDate(expiryDate.getDate() + pricingDetail.duration);

    await subscriptions.create({
      title: req.transaction.title,
      expiry_date: expiryDate,
      user_id: userId,
      transaction_id: req.transaction.id,
    });

    return res.status(201).send({
      message: 'status updated successfully',
    });
  } catch (error) {
    return res.status(400).send({
      message: 'something went wrong',
    });
  }
};

module.exports = { newSubscription };
