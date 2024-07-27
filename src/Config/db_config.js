const mongoose=require('mongoose')
const ServerConfig=require('./server_config')
const { response } = require('express')

async function ConnectDB(){

    try{
const response=await mongoose.connect(ServerConfig.DB_URL);
console.log('Successfully Connected to Database!!!!');
return response;
    }catch(error){
console.log(error)
console.log('Sorry!Canot connect to Database!!!!')
    }
} 


module.exports=ConnectDB;