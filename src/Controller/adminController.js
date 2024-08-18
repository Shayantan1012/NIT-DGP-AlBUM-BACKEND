

const {findAdminInService,createAdminInService,deleteAdminInService}=require('../Service/adminService')

async function findAdmin(req,res){
try{

const response =await findAdminInService({
    regNo:req.params.regNo,
})

return res.status(201).json({
    success:true,
    error:{},
    data:{response},
    massage:"Successfully fetched Admin!!!!"
});
}
catch(error){
    console.log(error);
    console.log("Error in Controller Layer of Events!!!!")
    return res.status(500).json({
        success:false,
        error:{error},
        data:{},
        massage:"Sorry Unable to fetched Admin!!!!"
    });
    
}
}

///objectID,eventName,imageType
async function createAdmin(req,res){
    try{
        const adminDetails={
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    roleNo:req.body.roleNo,
    year:req.body.year,
    mobileNumber:req.body.mobileNumber,
    roll:req.body.roll,
    regNo:req.body.regNo,
    email:req.body.email,
    password:req.body.password,
        }


    const response =await createAdminInService(adminDetails);
    console.log("CREATE ADNIN---->",response)
    return res.status(201).json({
        success:true,
        error:{},
        data:{response},
        massage:"SUCCESSFULLY Create Admin!!!!"
    });
    }
    catch(error){
        console.log(error);
        console.log("Error in Controller Layer of Events!!!!")
        return res.status(500).json({
            success:false,
            error:{error},
            data:{},
            massage:"Sorry Unable to create Admin!!!!"
        });
        }
    }
    async function deleteAdmin(req,res){
        try{

            const response =await deleteAdminInService(req.params.regNo);
            return res.status(201).json({
                success:true,
                error:{},
                data:{response},
                massage:"Successfully Delete the Admin!!!!"
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

module.exports={createAdmin,deleteAdmin,findAdmin}

