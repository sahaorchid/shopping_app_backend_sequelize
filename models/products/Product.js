const { Sequelize } = require('sequelize');
const sequelize  = require('../../utils')

const Product = sequelize.define('products',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER,
    image: Sequelize.STRING,
},{
    timestamps: false
})

module.exports = Product