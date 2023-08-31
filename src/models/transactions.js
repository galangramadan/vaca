'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transactions.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      account_number: DataTypes.STRING,
      first_name: DataTypes.STRING,
      second_name: DataTypes.STRING,
      status: DataTypes.ENUM('pending', 'success', 'failed'),
      user_id: DataTypes.INTEGER,
      pricing_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'transactions',
    }
  );
  return transactions;
};
