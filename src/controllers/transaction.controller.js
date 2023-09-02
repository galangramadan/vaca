const { transactions, pricing, users } = require('../models');

const newTransactions = async (req, res) => {
  try {
    const userId = req.user.id;
    const pricingId = parseInt(req.params.pricingId);
    const { account_number, first_name, second_name } = req.body;

    const user = await users.findOne({
      where: { id: userId },
    });

    if (!user)
      return res.status(403).send({
        message: 'forbidden, must login to access',
      });

    const pricingDetail = await pricing.findOne({
      where: { id: pricingId },
    });

    if (!account_number || !first_name || !second_name)
      return res.status(400).send({
        message: 'all fields must be filled!',
      });

    if (!pricingDetail)
      return res.status(404).send({
        message: 'pricing not found',
      });

    const pendingTransaction = await transactions.findOne({
      where: {
        pricing_id: pricingDetail.id,
        user_id: user.id,
        status: 'pending',
      },
    });

    if (pendingTransaction)
      return res.status(400).send({
        message: `please complete the previous transaction first`,
      });

    const transactionDetail = await transactions.create({
      title: pricingDetail.title,
      price: pricingDetail.price,
      account_number: account_number,
      first_name: first_name,
      second_name: second_name,
      status: 'pending',
      user_id: user.id,
      pricing_id: pricingDetail.id,
    });

    return res.status(201).send({
      message: 'new transaction has been created',
      data: transactionDetail,
    });
  } catch (error) {
    return res.status(400).send({
      message: 'something went wrong',
    });
  }
};

const transactionById = async (req, res) => {
  try {
    const transactionId = parseInt(req.params.transactionId);
    const userId = req.user.id;

    const result = await transactions.findOne({
      where: { id: transactionId },
    });

    const user = await users.findOne({
      where: { id: userId },
    });

    if (user.id == result.user_id || user.role == 'admin') {
      return res.status(200).send({
        message: 'data retrieved successfully',
        data: result,
      });
    } else {
      return res.status(403).send({
        message: 'forbidden, only admin or its user can access this data ',
      });
    }
  } catch (error) {
    return res.status(400).send({
      message: 'something went wrong',
    });
  }
};

const transactionByUserId = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const userIsLoginId = req.user.id;

    const result = await transactions.findAll({
      where: { user_id: userId },
    });

    const user = await users.findOne({
      where: { id: userIsLoginId },
    });

    if (user.id == userId || user.role == 'admin') {
      return res.status(200).send({
        message: 'data retrieved successfully',
        data: result,
      });
    } else {
      return res.status(403).send({
        message: 'forbidden, only admin or its user can access this data ',
      });
    }
  } catch (error) {
    return res.status(400).send({
      message: 'something went wrong',
    });
  }
};

const allTransactions = async (req, res) => {
  try {
    const userIsLoginId = req.user.id;

    const user = await users.findOne({
      where: { id: userIsLoginId },
    });

    if (user.role != 'admin')
      return res.status(403).send({
        message: 'forbidden, only admin can access this data',
      });

    const result = await transactions.findAll();

    return res.status(200).send({
      message: 'data retrieved successfully',
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      message: 'something went wrong',
    });
  }
};

const transactionStatus = async (req, res) => {
  try {
    const transactionId = parseInt(req.params.transactionId);
    const userIsLoginId = req.user.id;

    const user = await users.findOne({
      where: { id: userIsLoginId },
    });

    if (user.role != 'admin')
      return res.status(403).send({
        message: 'forbidden, only admin can update this data',
      });

    if (!transactionId)
      return res.status(400).send({
        message: 'no transaction id provided',
      });

    if (req.body.status != 'success' && req.body.status != 'failed')
      return res.status(400).send({
        message: 'invalid input',
      });

    await transactions.update(
      {
        status: req.body.status,
      },
      { where: { id: transactionId } }
    );

    const result = await transactions.findOne(
      {
        status: req.body.status,
      },
      { where: { id: transactionId } }
    );

    return res.status(201).send({
      message: 'status updated successfully',
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      message: 'something went wrong',
    });
  }
};

module.exports = {
  newTransactions,
  transactionById,
  transactionByUserId,
  allTransactions,
  transactionStatus,
};
