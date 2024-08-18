const express=require('express');

const {isLoggedIn,isAdmin} =require('../Validation/adminValidation')
const {createAdmin,deleteAdmin,findAdmin}=require('../Controller/adminController')
const adminRouter=express.Router();

adminRouter.post('/', createAdmin);
adminRouter.delete('/:regNo', deleteAdmin);
adminRouter.get('/:regNo', findAdmin);

module.exports=adminRouter;