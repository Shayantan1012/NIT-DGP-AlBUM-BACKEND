const mongoose = require("mongoose");
const bycrpt=require('bcrypt')
const AdminSchema=new mongoose.Schema({
    firstName:{
        type:String,
        lowercase:[true],
        trim:[true],
        require:[true,'First Name Is required!!'],
    },
    lastName:{
        type:String,
        lowercase:[true],
        trim:[true],
        require:[true,'Last Name Is required!!'],
    },
    role:{
        type:String,
        enum:['ADMIN','USER'],
        default:'USER',
        require:[true],
    },
    year:{
        type:Number,
        require:[true,'Year Is required!!'],
    },
    mobileNumber:{
        type:String,
        trim:[true],
        unique:[true,"Mobile number must be unique!!!"],
        require:[true,"Mobile number shuold be provided!!"],
        maxlength:[10,"Please give a valid mobile number!!!"],
        minlength:[10,"Please give a valid mobile number!!!"],

    },
    rollNo:{
        type:String,
        require:[true,'Roll Is required!!'],
        trim:[true],

    },
    regNo:{
        type:String,
        require:[true,'RegNo Is required!!'],
        trim:[true],

    },
    email:{
        type:String,
        require:[true,'Institute Email Is required!!'],
        trim:[true],
        match:  [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']  
    },
    password:{
        type:String,
        require:[true,"Password is manditory!!!"],
        minlength:[6,"Password should be minimum six charecter long!!!"],
    },
},{
    timestamps:true,
})

AdminSchema.pre('save',async function(){
this.password=await bycrpt(this.password,10)
console.log(this.password)
})

const Admin=mongoose.model('Admin',AdminSchema);
module.exports= Admin;