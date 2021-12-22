// const { cartDetails,newCartItem,deleteItem } = require('../../models/cart/index')
const Cart = require('../../models/cart/Cart')
const Product = require('../../models/products/Product')
const User = require('../../models/auth/User')

async function getCartDetails(req,res){
    try{
        const user_id = req.params.user_id
        const result = await Cart.findAll({
            include: [{model: Product},{model: User,attributes: ['name']}],
            where: {user_id: user_id}
        })
        res.json(result)
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})
    }
}

async function addNewCartItem(req,res){
    try{
        const user_id = req.params.user_id
        const { product_id,quantity } = req.body
        const result = await Cart.create({product:product_id,user_id:user_id,quantity:quantity})
        res.json({msg:"success"})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})
    }
}

async function deleteCartItem(req,res){
    try{
        const id = req.params.cart_id
        const result = await Cart.destroy({where: {id:id}})   
        res.json({msg:"success"})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})

    }
}

module.exports = {
    getCartDetails,
    addNewCartItem,
    deleteCartItem
}