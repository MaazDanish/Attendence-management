const Sequelize = require('sequelize');

const sequelize = new Sequelize('attendencemanagement','root','maazdanish',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;