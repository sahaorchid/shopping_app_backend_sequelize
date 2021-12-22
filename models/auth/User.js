const { Sequelize } = require('sequelize');
const sequelize  = require('../../utils')

const User = sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    description: Sequelize.STRING,
    password: Sequelize.STRING,

},{
    timestamps: false
})

module.exports = User