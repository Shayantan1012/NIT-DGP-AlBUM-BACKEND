const mongoose = require("mongoose");
const CampusSchema=new mongoose.Schema({
    placeName:{
        type:String,
        require:[true,'Place is required!!'],
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


const Campus=mongoose.model('Campus',CampusSchema);
module.exports= Campus;