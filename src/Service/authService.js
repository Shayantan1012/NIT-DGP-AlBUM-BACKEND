const jwt=require('jsonwebtoken')
const{JWT_EXPIRES,JWT_SECRET} =require('../Config/server_config')
const {findAdmin}= require('../Reprository/adminRepository')
const bcript=require('bcrypt')

async function loginAdmin(authDetails){

const regno=authDetails.email;
const plainPassword=authDetails.password;
const admin=await findAdmin({regno})
if(!admin){
    throw{message:"No Admin found With given Email!!!",statusCode: 404};
}
const ispasswordValid=await bcript.compare(plainPassword,admin.password);

if(!ispasswordValid){
    throw{message:'Invalid Password !!!! Please try again!!!',statusCode: 401};
}


const token = jwt.sign({ regNo:admin.regNo,password:admin.password},  
    JWT_SECRET, { 
        expiresIn: JWT_EXPIRES 
    }); 

    return {token,adminData:{
    email:admin.email,
    regno:admin.regNo,
    rollno:admin.roll,
    role:'ADMIN',
    }
}
}






module.exports={loginAdmin}