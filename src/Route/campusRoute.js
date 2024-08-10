const express=require('express');

const {postImageByAdmin,deleteImageByAdmin,getImageByAdmin}=require('../Controller/campusController')
const campusRouter=express.Router();
const uploader=require('../MulterMiddlewire/multerMiddlewire');
campusRouter.post('/',uploader.single('imageURL'), postImageByAdmin);
campusRouter.delete('/:eventName/:objectID', deleteImageByAdmin);
campusRouter.get('/', getImageByAdmin);


module.exports=campusRouter;