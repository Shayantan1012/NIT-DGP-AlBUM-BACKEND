const Clodinary=require('../Config/cloudinaryConfig')
const {postDetails,findSchema}=require('../Reprository/imageReprository');
const fs=require('fs/promises');


async function postImageInService(imageDetails,imageType){
const imagePath=imageDetails.imagePath;
//////////////////////////////
if(imagePath){
   try{ const cloudanaryResponse= await  Clodinary.uploader.upload(imagePath);
    await fs.unlink(imagePath);
    var imageUrl=cloudanaryResponse.secure_url;
}catch(error){
    console.log(error);
    console.log("Error in Cloudinary upload!!! Internal Server Error!!!!")
}
    }
     if(imageType=='Event'){
    const info={
        eventName:imageDetails.eventName,
        year:imageDetails.year,
        description:imageDetails.description,
        imagePath:imageUrl,
            }
        ///////////////////I need the event Schema/////////////
        ////I can Upload my Image///
        const schemaExist=await findSchema(info.eventName,'Event')
        if(schemaExist===null){
          var res=  await postDetails({eventName:info?.eventName,year:info?.year}
        ,'Event')
        await findSchema(info.eventName,'Event')
        }else{
            res=schemaExist;
        }
        
       if(res){
        if (!res.image) {
            res.image = []; // Ensure image array exists
        }

        res.image?.push({
            imageURL: info.imagePath,
            description: info.description,
        });
        await res.save(); // Ensure the save is awaited
        console.log("This is the response for Image Upload",res);
    }   
    return res;   
}
     if(imageType=='Department'){
        const info={
            departmentName:imageDetails.departmentName,
            description:imageDetails.description,
            imagePath:imageUrl,
                }
            ///////////////////I need the Department Schema/////////////
            ////I can Upload my Image///
            const schemaExist=await findSchema(info.departmentName,'Department')
            if(schemaExist===null){
              var res=await postDetails({departmentName:info?.departmentName}
            ,'Department')
            await findSchema(info.departmentName,'Department')
            }else{
                res=schemaExist;
            }
            
           if(res){
            if (!res.image) {
                res.image = []; // Ensure image array exists
            }
    
            res.image?.push({
                imageURL: info.imagePath,
                description: info.description,
            });
            await res.save(); // Ensure the save is awaited
            }
            return res;
}
     if(imageType=='Campus'){
    const info={
        placeName:imageDetails.placeName,
        description:imageDetails.description,
        imagePath:imageUrl,
            }
        ///////////////////I need the event Schema/////////////
        ////I can Upload my Image///
        const schemaExist=await findSchema(info.placeName,'Campus')
        if(schemaExist===null){
          var res=  await postDetails({placeName:info?.placeName}
        ,'Campus')
        await findSchema(info.placeName,'Campus')
        }else{
            res=schemaExist;
        }
        
       if(res){
        if (!res.image) {
            res.image = []; // Ensure image array exists
        }

        res.image?.push({
            imageURL: info.imagePath,
            description: info.description,
        });
        await res.save(); // Ensure the save is awaited
        }
        return res;
}
}


async function deleteImageInService(objectID,eventName,imageType){

    if(imageType=='Event'){
    const schemaExist=await findSchema(eventName,'Event')
    if(schemaExist===null){
    console.log(`There is no event named ${eventName}!!!!`);
    throw new Error(`Event ${eventName} not found`);
    }else{
       var res=schemaExist;
    }
    
    if (res.image && res.image.length > 0) {
        res.image = res.image.filter(
            (obj) => {
          return  objectID != obj._id
        }    
        )
        await res.save();
    } 


else {
    console.log("The Image is not found !!!!");
    throw new Error("The Image is not found !!!!")
}
return res;
    }

    else if(imageType=='Department'){
        const schemaExist=await findSchema(eventName,'Department')
        if(schemaExist===null){
        console.log(`There is no event named ${eventName}!!!!`);
        throw new Error(`Department ${eventName} not found`);
        }else{
           var res=schemaExist;
        }
        
        if (res.image && res.image.length > 0) {
            res.image = res.image.filter(
                (obj) => {
              return  objectID != obj._id
            }    
            )
            await res.save();
        } 
    
    
    else {
        console.log("The Image is not found !!!!");
        throw new Error("The Image is not found !!!!")
    }
    return res;
                }


    else if(imageType=='Campus'){
                const schemaExist=await findSchema(eventName,'Campus')
                if(schemaExist===null){
                console.log(`There is no Campus named ${eventName}!!!!`);
                throw new Error(`Campus ${eventName} not found`);
                }else{
                   var res=schemaExist;
                }
                
                if (res.image && res.image.length > 0) {
                    res.image = res.image.filter(
                        (obj) => {
                      return  objectID != obj._id
                    }    
                    )
                    await res.save();
                } 
            
            
            else {
                console.log("The Image is not found !!!!");
                throw new Error("The Image is not found !!!!")
            }
            return res;
                    }

                }
    
                
async function getImageInService(eventName,imageType){

    if(imageType=='Event'){
        var schemaExist=await findSchema(eventName,'Event')
        if(schemaExist===null){
        console.log(`There is no event named ${eventName}!!!!`);
        throw new Error(`Event ${eventName} not found`);
        }
            return schemaExist.image;    
        
        }
    else if (imageType=='Department'){
        var schemaExist=await findSchema(eventName,'Department')
        if(schemaExist===null){
        console.log(`There is no event named ${eventName}!!!!`);
        throw new Error(`Event ${eventName} not found`);
        }
            return schemaExist.image;    

    }

    else if(imageType=='Campus'){
        var schemaExist=await findSchema(eventName,'Campus')
        if(schemaExist===null){
        console.log(`There is no event named ${eventName}!!!!`);
        throw new Error(`Event ${eventName} not found`);
        }
            return schemaExist.image;    
    }

    }
        

    
    
module.exports={postImageInService,deleteImageInService,getImageInService}