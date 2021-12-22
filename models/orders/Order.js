const { Sequelize } = require('sequelize');
const sequelize  = require('../../utils')

const Order = sequelize.define('orders',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    grand_total: Sequelize.INTEGER,
},{
    timestamps: false
})

module.exports = Order