"use strict";
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let initData = [];
    for (let i = 0; i < 10; i++) {
      initData.push({
        username: "tester-" + i,
        password: bcrypt.hashSync("1234", bcrypt.genSaltSync(10)),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    return await queryInterface.bulkInsert("users", initData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
