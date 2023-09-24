const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
  },
  // test: {
  //   username: 'root',
  //   password: null,
  //   database: 'database_test',
  //   host: '127.0.0.1',
  //   dialect: 'mysql',
  // },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
  },
};
