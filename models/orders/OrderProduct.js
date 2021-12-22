const { Sequelize } = require('sequelize');
const sequelize  = require('../../utils')

const OrderProduct = sequelize.define('order_products',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_id: Sequelize.INTEGER,
    product_id: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
},{
    timestamps: false
})

module.exports = OrderProduct