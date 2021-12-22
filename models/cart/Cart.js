const { Sequelize } = require('sequelize');
const sequelize  = require('../../utils')

const Cart = sequelize.define('carts',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: Sequelize.INTEGER,
},{
    timestamps: false
})

module.exports = Cart