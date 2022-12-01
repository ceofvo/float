var db = require('../db');
const UserModel = require('./user');
const { DataTypes } = require('sequelize');

const UserCategories = db.define('User_Categories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bugetedAmount: {
    type: DataTypes.STRING,
    default: 0,
    allowNull: false
  }
});


UserModel.hasMany(UserCategories, { as: "categories" });
UserCategories.belongsTo(Tutorial, {
  foreignKey: "tutorialId",
  as: "tutorial",
});

// (async () => await UserCategories.sync())();
module.exports = UserCategories;
