const mongoose = require("mongoose");
const eventSchema=new mongoose.Schema({
    adminName:{
        type:String,
        require:[true,'Admin Name Is required!!'],
    },
    year:{
        type:Number,
        require:[true,'Year Is required!!'],
    },
    roll:{
        type:String,
        require:[true,'Roll Is required!!'],
    },
    regNo:{
        type:String,
        require:[true,'RegNo Is required!!'],
    },
    email:{
        type:String,
        require:[true,'Institute Email Is required!!'],
    },
    password:{
        type:String,
        require:[true,'Password Is required!!'],
    }

},{
    timestamps:true,
})


const Event=mongoose.model('Event',eventSchema);
module.exports= Event;