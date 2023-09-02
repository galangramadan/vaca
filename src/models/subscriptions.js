'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subscriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subscriptions.init({
    title: DataTypes.STRING,
    expiry_date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'subscriptions',
  });
  return subscriptions;
};