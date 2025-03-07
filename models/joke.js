const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Joke = sequelize.define("Joke", {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Joke;
