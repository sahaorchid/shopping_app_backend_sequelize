// const { fetcAllhProducts,addProducts,getProduct,updateProduct,deleteProduct } = require('../../models/products/index.js')
const Product = require('../../models/products/Product')

async function getAllProductsDetails(req,res){
    const result = await Product.findAll()
    res.status(200).json(result)
}

async function addNewProducts(req,res){
    try{
        const {name,description,price,image} = req.body
        const result = await Product.create({name:name,description:description,price:price,image:image})
        res.status(200).json({msg:"success"})
    }catch{
        res.status(500).json({msg:"error occured"})
    }
}

async function getProductById(req,res){
    const id = req.params.id
    const result = await Product.findAll({where: {id: id}})
    res.json(result)
}

async function updateProductById(req,res){
    try{
        const id = req.params.id
        const {name,description,price,image} = req.body
        const result = await Product.update({name:name,description:description,price:price,image:image},
            {where: {id: id}})
        res.status(200).json({msg:"success"})
    }catch{
        res.status(500).json({msg:"error occured"})
    }
}

async function deleteProductById(req,res){
    try{
        const id = req.params.id
        const result = await Product.destroy({where: {id:id}})
        res.json({msg:"success"})
    }catch{
        res.status(500).send({msg:"error occured"})
    }
}

module.exports = {
    getAllProductsDetails,
    addNewProducts,
    getProductById,
    updateProductById,
    deleteProductById
}