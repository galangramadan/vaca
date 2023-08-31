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
    res.status(400).send({
      message: 'something went wrong',
    });
  }
};

module.exports = { newTransactions };
