const express=require('express');

const {postImageByAdmin,deleteImageByAdmin,getImageByAdmin_department, changeDepartmentNameByAdmin}=require('../Controller/departmentController')
const {isLoggedIn,isAdmin} =require('../Validation/adminValidation')
const departmentRouter=express.Router();
const uploader=require('../MulterMiddlewire/multerMiddlewire');
departmentRouter.post('/',uploader.single('imageURL'), isLoggedIn,isAdmin, postImageByAdmin);
departmentRouter.delete('/:eventName/:objectID', isLoggedIn,isAdmin, deleteImageByAdmin);
departmentRouter.get('/',getImageByAdmin_department);
departmentRouter.post('/:oldEventName/:eventName',isLoggedIn,isAdmin,changeDepartmentNameByAdmin);
module.exports=departmentRouter;


