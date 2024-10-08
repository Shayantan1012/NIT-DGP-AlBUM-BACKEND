

const express=require('express');

const {getImageByAdmin_event}=require('../Controller/eventController')
const {getImageByAdmin_campus}=require('../Controller/campusController')
const {getImageByAdmin_department}=require('../Controller/departmentController')
const userRouter=express.Router();

userRouter.get('/event', getImageByAdmin_event);
userRouter.get('/campus', getImageByAdmin_campus);
userRouter.get('/department', getImageByAdmin_department);

module.exports=userRouter;