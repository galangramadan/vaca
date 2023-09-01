'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const adminPassword = bcrypt.hashSync('Admin12#', 8);
    const userPassword = bcrypt.hashSync('user1', 8);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('users', [
      {
        email: 'admin@mail.com',
        password: adminPassword,
        role: 'admin',
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user1@mail.com',
        password: userPassword,
        role: 'user',
        name: 'user1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  },
};
