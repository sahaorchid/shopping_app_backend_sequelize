const express = require('express')
const productsRoute = require('./routes/products/index')
const authRoute = require('./routes/auth/index')
const userRoute = require('./routes/users/index')
const cartRoute = require('./routes/cart/index')
const ordersRoute = require('./routes/orders/index')
const Product = require('./models/products/Product')
const Cart = require('./models/cart/Cart')
const User = require('./models/auth/User')
const Order = require('./models/orders/Order')
const OrderProduct = require('./models/orders/OrderProduct')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

Product.hasMany(Cart,{foreignKey: 'product_id'})
Product.hasOne(OrderProduct,{foreignKey: 'product_id'})
Order.hasMany(OrderProduct,{foreignKey: 'order_id'})
User.hasOne(Cart,{foreignKey: 'user_id'})
Cart.belongsTo(Product,{foreignKey: 'product_id'})
Cart.belongsTo(User,{foreignKey: 'user_id'})
OrderProduct.belongsTo(Order,{foreignKey: 'order_id'})
OrderProduct.belongsTo(Product,{foreignKey: 'product_id'})

app.use('/',productsRoute)
app.use('/auth',authRoute)
app.use('/user-profile',userRoute)
app.use('/cart',cartRoute)
app.use('/orders',ordersRoute)


app.listen(3000,()=>{
    console.log("server started")
})