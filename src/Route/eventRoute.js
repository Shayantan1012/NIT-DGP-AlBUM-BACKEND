const express=require('express');

const {postImageByAdmin,deleteImageByAdmin,getImageByAdmin}=require('../Controller/eventController')
const eventRouter=express.Router();
const uploader=require('../MulterMiddlewire/multerMiddlewire');
eventRouter.post('/',uploader.single('imageURL'), postImageByAdmin);
eventRouter.delete('/:eventName/:objectID', deleteImageByAdmin);
eventRouter.get('/', getImageByAdmin);

module.exports=eventRouter;