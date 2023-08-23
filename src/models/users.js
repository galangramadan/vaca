'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('admin', 'user'),
    phone_number: DataTypes.INTEGER,
    name: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female'),
    date_of_birth: DataTypes.DATE,
    address: DataTypes.TEXT,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};