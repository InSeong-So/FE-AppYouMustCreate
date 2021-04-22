"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("todos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      todoType: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      todoName: {
        type: Sequelize.STRING,
      },
      alias: {
        type: Sequelize.STRING,
      },
      inputType: {
        type: Sequelize.STRING,
      },
      completeYn: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("todos");
  },
};
