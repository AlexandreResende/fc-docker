const Sequelize = require('sequelize');

const environment = 'development';
const config = require('../config.json')[environment];

const sequelize = new Sequelize(
  config.database,
  config. username,
  config.password,
  { dialect: config.dialect, host: config.host }
);

module.exports = sequelize;
