const dotenv=require('dotenv');
//////////////////////
dotenv.config();
module.exports={
PORT:process.env.PORT,
DB_URL:process.env.DB_URL,
CLOUDINARY_NAME:process.env.CLOUDINARY_NAME,
CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,
JWT_SECRET:process.env.JWT_SECRET,
JWT_EXPIRES:process.env.JWT_EXPIRES,
COOKIE_SECURE:process.env.COOKIE_SECURE,
}