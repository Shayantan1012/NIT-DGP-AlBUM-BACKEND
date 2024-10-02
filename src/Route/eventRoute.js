const express=require('express');

const {postImageByAdmin,deleteImageByAdmin,getImageByAdmin_event}=require('../Controller/eventController')
const {isLoggedIn,isAdmin} =require('../Validation/adminValidation')
const eventRouter=express.Router();
const uploader=require('../MulterMiddlewire/multerMiddlewire');
eventRouter.post('/',isLoggedIn,isAdmin,uploader.single('imageURL'), postImageByAdmin);
eventRouter.delete('/:eventName/:objectID',isLoggedIn,isAdmin, deleteImageByAdmin);
eventRouter.get('/',getImageByAdmin_event);
module.exports=eventRouter;

////