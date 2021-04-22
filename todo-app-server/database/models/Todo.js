"use strict";
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      author: {
        allowNull: false,
        type: DataTypes.STRING
      },
      todoType: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      todoName: {
        type: DataTypes.STRING,
      },
      alias: {
        type: DataTypes.STRING,
      },
      inputType: {
        type: DataTypes.STRING,
      },
      completeYn: {
        type: DataTypes.STRING,
      },
      note: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "todos",
      timestamps: true,
    }
  );

  Todo.associate = function (models) { };

  Todo.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    return {
      id: values.id,
      author: values.author,
      todoType: values.username,
      todoName: values.password,
      alias: values.alias,
      inputType: values.inputType,
      completeYn: values.completeYn,
      note: values.note,
    };
  };

  return Todo;
};
