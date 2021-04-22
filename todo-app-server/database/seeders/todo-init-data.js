"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let initData = [];
    for (let i = 0; i < 10; i++) {
      initData.push({
        author: "tester-0",
        todoType: i,
        todoName: "새로운 할 일",
        alias: "",
        inputType: "",
        completeYn: "N",
        note: "init",
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return await queryInterface.bulkInsert("todos", initData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("todos", null, {});
  },
};
