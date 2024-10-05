const { Cloudinary } = require('@cloudinary/url-gen/index');
const Clodinary=require('../Config/cloudinaryConfig')
const {postDetails,findSchema,findSchemaWithName}=require('../Reprository/imageReprository');
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
        const schemaExist=await findSchemaWithName(info.eventName,'Event')
console.log("schemaExist",schemaExist);
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
            const schemaExist=await findSchemaWithName(info.departmentName,'Department')
            console.log("schemaExist",schemaExist);

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
        const schemaExist=await findSchemaWithName(info.placeName,'Campus')
        console.log("schemaExist",schemaExist);


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
    const schemaExist=await findSchemaWithName(eventName,'Event')
    if(schemaExist===null){
    console.log(`There is no event named ${eventName}!!!!`);
    throw new Error(`Event ${eventName} not found`);
    }else{
       var res=schemaExist;
    }

    const data = res.image.find(item => item._id == objectID);
    const imageURL=data.imageURL;
    const spliteName=imageURL.split('/');
    var imagename=spliteName[spliteName.length-1];
    imagename=imagename.split('.')[0]

    const cloudanaryResponse= await  Clodinary.uploader.destroy(imagename,(error,result)=>{
        console.log(error,result);
    });
    console.log("This is Cloudinaries DELETED response->",cloudanaryResponse);

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
        const schemaExist=await findSchemaWithName(eventName,'Department')
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
                const schemaExist=await findSchemaWithName(eventName,'Campus')
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
    
                
async function getImageInService(imageType){

    if(imageType=='Event'){
        var schemaExist=await findSchema('Event')
        if(schemaExist===null){
        console.log(`There is no event named !!!!`);
        throw new Error(`Event not found`);
        }
            return schemaExist;    
        
        }
    else if (imageType=='Department'){
        var schemaExist=await findSchema('Department')
        if(schemaExist===null){
        console.log(`There is no Department named !!!!`);
        throw new Error(`Department not found`);
        }
            return schemaExist;    

    }

    else if(imageType=='Campus'){
        var schemaExist=await findSchema('Campus')
        if(schemaExist===null){
            console.log(`There is no Campus named !!!!`);
            throw new Error(`Campus not found`);
        }
            return schemaExist;    
    }

    }
        

    
    
module.exports={postImageInService,deleteImageInService,getImageInService}