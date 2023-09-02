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

    await queryInterface.bulkInsert('books', [
      {
        title: 'book1',
        image: 'book1',
        author: 'book1',
        description: 'book1',
        content: 'https://pdf.com/book1',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'book2',
        image: 'book2',
        author: 'book2',
        description: 'book2',
        content: 'https://pdf.com/book2',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'book3',
        image: 'book3',
        author: 'book3',
        description: 'book3',
        content: 'https://pdf.com/book3',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'book4',
        image: 'book4',
        author: 'book4',
        description: 'book4',
        content: 'https://pdf.com/book4',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'book5',
        image: 'book5',
        author: 'book5',
        description: 'book5',
        content: 'https://pdf.com/book5',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'book6',
        image: 'book6',
        author: 'book6',
        description: 'book6',
        content: 'https://pdf.com/book6',
        category_id: 3,
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

    await queryInterface.bulkDelete('books', null, {});
  },
};
