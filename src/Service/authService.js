const jwt=require('jsonwebtoken')
const{JWT_EXPIRES,JWT_SECRET} =require('../Config/server_config')
const {findAdminInRepository}= require('../Reprository/adminRepository')
const bcript=require('bcrypt')

async function loginAdmin(authDetails){

const regNo=authDetails.regNo;
const plainPassword=authDetails.password;
const admin=await findAdminInRepository({regNo:regNo})
if(!admin){
    throw{message:"No Admin found With given Email!!!",statusCode: 404};
}
const ispasswordValid=await bcript.compare(plainPassword,admin.password);

if(!ispasswordValid){
    throw{message:'Invalid Password !!!! Please try again!!!',statusCode: 401};
}


const token = jwt.sign({ regNo:admin.regNo,id: admin._id ,role:admin.role},  
    JWT_SECRET, { 
        expiresIn: JWT_EXPIRES 
    }); 

    return {token,adminData:{
    email:admin.email,
    regno:admin.regNo,
    role:'ADMIN',
    }
}
}






module.exports={loginAdmin}