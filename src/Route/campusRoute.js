const express=require('express');
const {isLoggedIn,isAdmin} =require('../Validation/adminValidation')
const {postImageByAdmin,deleteImageByAdmin,getImageByAdmin_campus}=require('../Controller/campusController')
const campusRouter=express.Router();
const uploader=require('../MulterMiddlewire/multerMiddlewire');
campusRouter.post('/',isLoggedIn,isAdmin,uploader.single('imageURL'), postImageByAdmin);
campusRouter.delete('/:eventName/:objectID', isLoggedIn,isAdmin,deleteImageByAdmin);
campusRouter.get('/:eventName',getImageByAdmin_campus);

module.exports=campusRouter;