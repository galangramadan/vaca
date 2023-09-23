const { pricing, users } = require('../models');

const allPricing = async (req, res) => {
  try {
    const result = await pricing.findAll();
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

const pricingById = async (req, res) => {
  try {
    const pricingId = parseInt(req.params.pricingId);

    const result = await pricing.findOne({
      where: { id: pricingId },
    });

    return res.status(200).send({
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'something wrong',
      data: error,
    });
  }
};

const updatePricing = async (req, res) => {
  try {
    const pricingId = parseInt(req.params.pricingId);
    const userId = req.user.id;
    const { title, price, duration, description, details } = req.body;

    const user = await users.findOne({
      where: { id: userId },
    });

    if (user.role !== 'admin')
      return res.status(403).send({
        message: 'forbidden, only admin can access',
      });

    if (!title || !price || !duration || !description || !details)
      return res.status(400).send({
        message: 'all field must be filled!',
      });

    await pricing.update(
      {
        title: title,
        price: price,
        duration: duration,
        description: description,
        details: details,
      },
      {
        where: { id: pricingId },
      }
    );

    return res.status(201).send({
      message: 'pricing updated successfully',
    });
  } catch (error) {
    return res.status(500).send({
      message: 'something went wrong',
      data: error,
    });
  }
};

module.exports = { allPricing, pricingById, updatePricing };
