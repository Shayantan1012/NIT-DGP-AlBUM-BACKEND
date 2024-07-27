const express=require('express')

const {postImageByAdmin} =require('../Controller/eventController');

const authRouter=express.Router()

authRouter.post('/',(req,res)=>postImageByAdmin(req,res));

module.exports=authRouter;