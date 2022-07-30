'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      total_pages: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      release_year: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt:Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('books');

  }
};
