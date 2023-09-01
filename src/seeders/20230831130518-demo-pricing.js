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

    await queryInterface.bulkInsert('pricings', [
      {
        title: 'Premium fiksi',
        price: 49999,
        duration: 30,
        description: 'Ini premium fiksi',
        details: 'ini details premium fiksi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Premium nonfiksi',
        price: 49999,
        duration: 30,
        description: 'Ini premium nonfiksi',
        details: 'ini details premium nonfiksi',
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
  },
};
