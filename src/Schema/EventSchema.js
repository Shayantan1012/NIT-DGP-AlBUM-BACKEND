const mongoose = require("mongoose");
const eventSchema=new mongoose.Schema({
    eventName:{
        type:String,
        require:[true,'Event Name Is required!!'],
    },
    year:{
        type:Number,
        require:[true,'Event Name Is required!!'],
    },
    image:[
{        imageURL:{
            type:String,
            require:[true,'Image is required!!'],
        },
        
        description:{
        type:String,
        require:[true,'Description is required!!'],
        minLength:10,
        }
}            ]

},{
    timestamps:true,
})


const Event=mongoose.model('Event',eventSchema);
module.exports= Event;