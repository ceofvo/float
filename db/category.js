var db = require('../db');
const { DataTypes } = require('sequelize');

const Category = db.define('Categories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.STRING,
    default: 0,
    allowNull: false
  }
});

(async () => await Category.sync())();
module.exports = Category;
