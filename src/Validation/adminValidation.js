const jwt=require('jsonwebtoken');

const { JWT_SECRET } = require('../Config/server_config');
const {COOKIE_SECURE}=require("../Config/server_config")
async function isLoggedIn(req,res,next){
const token =req.cookies["authToken"];
if(!token){
    return res.status(401).json({
        success:false,
        data:{},
        error:"No Authentication!!!!!! ",
        message:"No Auth token Provided!!!",
    })
}

try{
var decoded=jwt.verify(token,JWT_SECRET);
console.log("this is decoded res->",decoded);

req.admin = {
    regNo: decoded.regNo,
    role: decoded.role,
    id:decoded.id,
};   
}catch(error){
    console.log(error);
    if(error.name==='TokenExpiredError'){
        res.cookie("authToken",null,{
            httpOnly:true,
            secure:COOKIE_SECURE,
            maxAge:7*24*60*60*1000,
        });
return res.status(200).json({
    success:true,
    message:'Log Out Successfully!!!',
    error:{name:error.name},
    data:{},
})        
    }

return res.status(401).json({
    success:false,
    message:'Cannot logged in!!!',
    error:error,
    data:{},
})        
}

if(!decoded){
    return res.status(401).json({
        success:false,
        data:{},
        error:"No Authentication!!!!!! ",
        message:"Invalid token Provided!!!",
    })
}
//If reach allow them to access api//
next();
}

/*
This function checks is the autentication user is an Admin or not*/
//Because we will call is Admin after is Logged in thats why we will recieve user details//
async function isAdmin(req,res,next){
const loggedInUser=req.admin;
console.log(loggedInUser)
if(loggedInUser.role==="ADMIN"){
    next();
}
else{
    return res.status(404).json({
        success:false,
        data:{},
        message:'You are not a Authorised User!!!!',
        error:{
            statusCode:401,
            reason:"Unauthorised user for this action!!",
        }
    })
    
}
}
module.exports={
    isLoggedIn,isAdmin
}
////