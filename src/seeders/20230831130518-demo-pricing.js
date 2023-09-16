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
        title: 'Premium Fiksi',
        price: 49999,
        duration: 30,
        description: 'Paket berlangganan premium untuk buku fiksi dan sastra',
        details: JSON.stringify([
          'Ribuan bacaan fiksi dan sastra terpopuler.',
          'Bacaan terbaru setiap minggu.',
          'Unduh dan baca kapan saja, bahkan secara offline.',
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Premium Non-Fiksi',
        price: 49999,
        duration: 30,
        description:
          'Paket berlangganan premium untuk buku non-fiksi dan sastra',
        details: JSON.stringify([
          'Ribuan bacaan non-fiksi terpopuler.',
          'Bacaan terbaru setiap minggu.',
          'Unduh dan baca kapan saja, bahkan secara offline.',
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Full Premium',
        price: 99999,
        duration: 30,
        description:
          'Paket berlangganan premium untuk akses semua buku di VACA',
        details: JSON.stringify([
          'Semua bacaan di premium fiksi dan premium non-fiksi.',
          'Bacaan terbaru setiap minggu.',
          'Unduh dan baca kapan saja, bahkan secara offline.',
        ]),
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
