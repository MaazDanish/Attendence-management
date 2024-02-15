const Sequelize = require('sequelize');

const sequelize = require('../UTIL/connectToDB');

const Attendence = sequelize.define('attendence', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    attendenceStatus: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Attendence;