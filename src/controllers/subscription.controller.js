const { Op } = require('sequelize');
const { pricing, subscriptions } = require('../models');

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
      user_id: req.transaction.user_id,
      transaction_id: req.transaction.id,
    });

    return res.status(201).send({
      message: 'status updated successfully',
    });
  } catch (error) {
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
    });
  }
};

const subscriptionById = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const userIsLoginId = req.user.id;

    if (userId != userIsLoginId)
      return res.status(403).send({
        message: 'forbidden, only its user can access this data',
      });

    const result = await subscriptions.findAll({
      where: { user_id: userId },
    });

    return res.status(200).send({
      message: 'data retrieved successfully',
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
    });
  }
};

const subscriptionByIdAndStatus = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const userIsLoginId = req.user.id;
    const status = req.query.status;

    if (userId != userIsLoginId)
      return res.status(403).send({
        message: 'forbidden, only its user can access this data',
      });

    if (status != 'active' && status != 'expired')
      return res.status(400).send({
        message: 'invalid status input',
      });

    if (status == 'active') {
      const result = await subscriptions.findAll({
        where: { user_id: userId, expiry_date: { [Op.gte]: new Date() } },
      });

      return res.status(200).send({
        message: 'data retrieved successfully',
        data: result,
      });
    }

    if (status == 'expired') {
      const result = await subscriptions.findAll({
        where: { user_id: userId, expiry_date: { [Op.lt]: new Date() } },
      });

      return res.status(200).send({
        message: 'data retrieved successfully',
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
    });
  }
};

module.exports = {
  newSubscription,
  subscriptionById,
  subscriptionByIdAndStatus,
};
