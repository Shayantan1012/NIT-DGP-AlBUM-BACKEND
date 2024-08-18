const express=require('express');

const {postImageByAdmin,deleteImageByAdmin,getImageByAdmin_event}=require('../Controller/eventController')
const {isLoggedIn,isAdmin} =require('../Validation/adminValidation')

const eventRouter=express.Router();
const uploader=require('../MulterMiddlewire/multerMiddlewire');
eventRouter.post('/',uploader.single('imageURL'), postImageByAdmin);
eventRouter.delete('/:eventName/:objectID', deleteImageByAdmin);
eventRouter.get('/',getImageByAdmin_event);
module.exports=eventRouter;