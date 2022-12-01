const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
    dialect: 'postgres',
    url: process.env.SQL_URL
});