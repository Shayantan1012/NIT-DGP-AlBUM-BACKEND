const clodinary=require('cloudinary').v2;
const ServerConfig=require('./server_config')
clodinary.config({ 
    cloud_name: ServerConfig.CLOUDINARY_NAME, 
    api_key: ServerConfig.CLOUDINARY_API_KEY, 
    api_secret: ServerConfig.CLOUDINARY_API_SECRET,// Click 'View Credentials' below to copy your API secret
});
module.exports=clodinary