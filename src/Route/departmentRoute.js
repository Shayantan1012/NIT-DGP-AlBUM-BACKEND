const express=require('express');

const {postImageByAdmin,deleteImageByAdmin,getImageByAdmin}=require('../Controller/departmentController')

const departmentRouter=express.Router();
const uploader=require('../MulterMiddlewire/multerMiddlewire');
departmentRouter.post('/',uploader.single('imageURL'), postImageByAdmin);
departmentRouter.delete('/:eventName/:objectID', deleteImageByAdmin);
module.exports=departmentRouter;


