const mongoose=require('mongoose')
const CampusImage=require('../Schema/CampusSchema')
const DepartmentImage=require('../Schema/DepartmentSchema')
const EventImage=require('../Schema/EventSchema')

async function findImageById(imageId,type){
    try{
        if(type=='CampusImage'){
            const response=await CampusImage.findById(imageId);
            return response;
        }
        else if(type=='DepartmentImage'){
            const response=await DepartmentImage.findById(imageId);
            return response;
        }
        else if(type=='EventImage'){
            const response=await EventImage.findById(imageId);
            return response;
        }
    }catch(error){
        console.log(error);
        console.log("Internal server Error!!!!");
    }
}


async function deleteImageById(imageId,type){
    try{
        if(type=='CampusImage'){
            await CampusImage.findByIdAndDelete(imageId);
            return true;
        }
        else if(type=='DepartmentImage'){
            await DepartmentImage.findByIdAndDelete(imageId);
            return true;
        }
        else if(type=='EventImage'){
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
    findImageById,
}
