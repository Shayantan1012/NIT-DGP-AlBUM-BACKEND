

const {postImageInService,deleteImageInService, getImageInService, changeImageNameInService}=require('../Service/imageService')

async function postImageByAdmin(req,res){
try{
    console.log("THis is req Body--->",req.body , req.file);

const response =await postImageInService({
departmentName:req.body.departmentName,
description:req.body.description,
imagePath:req.file?.path
},"Department")

return res.status(201).json({
    success:true,
    error:{},
    data:{response},
    massage:"Successfully Uploaded Image!!!!"
});
}
catch(error){
    console.log(error);
    console.log("Error in Controller Layer of Events!!!!")
    return res.status(500).json({
        success:false,
        error:{error},
        data:{},
        massage:"Sorry Unable to Uploaded Image!!!!"
    });
    
}
}
///objectID,eventName,imageType
async function deleteImageByAdmin(req,res){
    try{

    const response =await deleteImageInService(req.params.objectID,req.params.eventName,"Department");
    console.log("DELETE---->",response)
    return res.status(201).json({
        success:true,
        error:{},
        data:{response},
        massage:"Successfully Delete Image!!!!"
    });
    }
    catch(error){
        console.log(error);
        console.log("Error in Controller Layer of Events!!!!")
        return res.status(500).json({
            success:false,
            error:{error},
            data:{},
            massage:"Sorry Unable to Delete Image!!!!"
        });
        }
    }
    async function getImageByAdmin_department(req,res){
        try{

            const response =await getImageInService("Department");
            return res.status(201).json({
                success:true,
                error:{},
                data:{response},
                massage:"Successfully fetched the Image!!!!"
            });
            }
            catch(error){
                console.log(error);
                console.log("Error in Controller Layer of Events!!!!")
                return res.status(500).json({
                    success:false,
                    error:{error},
                    data:{},
                    massage:"Sorry Unable to fetch Image!!!!"
                });
                                }
        
    }

    async function changeDepartmentNameByAdmin(req,res){
        try{
        const response =await changeImageNameInService(req.params.eventName,req.params.oldEventName,"Department");
        return res.status(201).json({
            success:true,
            error:{},
            data:{response},
            massage:"Successfully Change Image Name!!!!"
        });
        }
        catch(error){
            console.log(error);
            console.log("Error in Controller Layer of Events!!!!")
            return res.status(500).json({
                success:false,
                error:{error},
                data:{},
                massage:"Sorry Unable to Change Image Name!!!!"
            });
            }
        }

module.exports={postImageByAdmin,deleteImageByAdmin,getImageByAdmin_department,changeDepartmentNameByAdmin}

