// const { userLogin,UserRegister } = require('../../models/auth/index')
// const { userEmailCheck } = require('../../utils')
const User = require('../../models/auth/User')

async function getAllUser(req,res){
    const resu = await User.findAll({
        limit: 1,
        order: [['id','DESC']]
    })
    console.log(resu)
    const data = await User.findAll()
    res.json({data: data})
 }
async function checkUserLogin(req,res){
    try{
        const { email, password } = req.body
        const result = await User.findAll({where:{email: email, password: password}})
        if(result.length === 1){
            res.json({msg:"success",user_data:result})
        }else{
            res.json({msg:"user is not present"})
        }
    }catch{
        res.status(500).json({msg:"error occured"})
    }
}

async function newUserRegister(req,res){
    try{
        const { name,email,address,description,password } = req.body
        const user = await User.findAll({where:{email:email}})
        if(user.length == 0){
            const result = await User.create({name:name,email:email,address:address,description:description,password:password})
            res.status(200).json({msg:"success"})
        }else{
            res.json({msg:"email is already exist"})
        }
    }catch{
        res.status(500).json({msg:"error occured"})
    }
}



module.exports = {
    checkUserLogin,
    newUserRegister,
    getAllUser
}

