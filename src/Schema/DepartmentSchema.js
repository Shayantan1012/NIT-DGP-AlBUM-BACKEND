const mongoose = require("mongoose");
const DepartmentSchema=new mongoose.Schema({
    departmentName:{
        type:String,
        require:[true,'Department name is required!!'],
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


const Department=mongoose.model('Department',DepartmentSchema);
export default Department;