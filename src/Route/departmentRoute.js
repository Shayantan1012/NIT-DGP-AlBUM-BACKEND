const express=require('express');

const {postImageByAdmin,deleteImageByAdmin,getImageByAdmin_department}=require('../Controller/departmentController')
const {isLoggedIn,isAdmin} =require('../Validation/adminValidation')
const departmentRouter=express.Router();
const uploader=require('../MulterMiddlewire/multerMiddlewire');
departmentRouter.post('/',uploader.single('imageURL'), isLoggedIn,isAdmin, postImageByAdmin);
departmentRouter.delete('/:eventName/:objectID', isLoggedIn,isAdmin, deleteImageByAdmin);
departmentRouter.get('/:eventName',getImageByAdmin_department);
module.exports=departmentRouter;


