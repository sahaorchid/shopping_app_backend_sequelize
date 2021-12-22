// const { userDetails,updateDetails,updatePassword } = require('../../models/users/index')
// const { userEmailCheck } = require('../../utils')
const User = require('../../models/auth/User')

async function getUserDetails(req,res){
    try{
        const id = req.params.id;
        const result = await User.findOne({where: {id:id}})
        res.json(result)
    }catch{
        res.status(200).json({msg:"error occured"});
    }

}

async function updateUserDetails(req,res){
    try{
        const { id,name,email,address,description } = req.body
        const rslt = await User.findAll({where: {email: email}})
        console.log(rslt)
        if(rslt.length === 1){
            const result = await User.update({ name:name,email:email,address:address,description:description },
                {where: {id:id}})
            res.send({mag:'success'})
        }else{
            res.status(200).json({msg:"email is already exist"});
        }
    }catch(err){
        console.log(err)
        res.status(200).json({msg:"error occured"});
    }
}

async function updateUserPassword(req,res){
    try{
        const { id,password } = req.body
        const result = await User.update({ password:password },
            {where: {id:id}})
        res.send({mag:'success'})
    }catch{
        res.status(200).json({msg:"error occured"});
    }
}

module.exports = {
    getUserDetails,
    updateUserDetails,
    updateUserPassword
}