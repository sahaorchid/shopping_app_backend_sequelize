const express = require('express')
// const { checkUserLogin,newUserRegister,data } = require('../../controllers/auth/index')
const { getAllUser,checkUserLogin,newUserRegister } = require('../../controllers/auth/index')

const authRouter = express.Router()

authRouter.post('/login',checkUserLogin)
authRouter.get('/data',getAllUser)
authRouter.post('/register',newUserRegister)

module.exports = authRouter