const mongoose=require('mongoose')
const CampusImage=require('../Schema/CampusSchema')
const DepartmentImage=require('../Schema/DepartmentSchema')
const EventImage=require('../Schema/EventSchema')

async function findSchema(type){
    try{
        if(type=='Campus'){
            const response=await CampusImage.find();
            return response;
        }
        else if(type=='Department'){
            const response=await DepartmentImage.find();
            return response;
        }
        else if(type=='Event'){
          const response=await EventImage.find();
            return response;
        }
    }catch(error){
        console.log(error);
        console.log("Internal server Error!!!!");
    }

}

async function postDetails(schemaDetails,type){    
    try{
        if(type=='Campus'){
            const response=await CampusImage.create(schemaDetails);
            return response;
        }
        else if(type=='Department'){
            const response=await DepartmentImage.create(schemaDetails);
            return response;
        }
        else if(type=='Event'){
            const response=await EventImage.create(schemaDetails);
            return response;
        }
    }catch(error){
        console.log(error);
        console.log("Internal server Error!!!!");
    }
}



async function deleteImageById(imageId,type){
    try{
        if(type=='Campus'){
            await CampusImage.findByIdAndDelete(imageId);
            return true;
        }
        else if(type=='Department'){
            await DepartmentImage.findByIdAndDelete(imageId);
            return true;
        }
        else if(type=='Event'){
            await EventImage.findByIdAndDelete(imageId);
            return true;
        }
    }catch(error){
        console.log(error);
        console.log("Internal server Error!!!!");
    }
}


module.exports={
    deleteImageById,
    postDetails,
    findSchema
}
