'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Fiksi',
        image: 'images/fiksi.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sejarah',
        image: 'images/history.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gaya Hidup',
        image: 'images/life style.svg',
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

    await queryInterface.bulkDelete('categories', null, {});
  },
};
