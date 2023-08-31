const { pricing, users } = require('../models');

const allPricing = async (req, res) => {
  try {
    const result = await pricing.findAll();
    res.status(200).send({
      message: 'data retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      message: 'something went wrong',
      data: error,
    });
  }
};

const updatePricing = async (req, res) => {
  try {
    const userId = req.user.id;
    const { pricingId, title, price, duration, description, details } =
      req.body;

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

    res.status(201).send({
      message: 'pricing updated successfully',
    });
  } catch (error) {
    res.status(400).send({
      message: 'something went wrong',
      data: error,
    });
  }
};

module.exports = { allPricing, updatePricing };
