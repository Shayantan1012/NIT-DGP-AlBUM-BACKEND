const {createAdminInRepository,findAdminInRepository,deleteAdminInRepository} =require("../Reprository/adminRepository");
async function findAdminInService(adminDetails){

    try{
        const admin=await findAdminInRepository(
            {regNo:adminDetails.regNo}
        )
    return admin;
     }catch(error){
        console.log(error)
    console.log("Error in Admin Service Layer!!!!");
    throw Error("Unable to create Admin!!!!");
     }  

}


async function  createAdminInService(adminDetails) {
 try{
    const admin=await findAdminInService(
        {regNo:adminDetails.regNo}
    )

    if(admin){
        console.log("Admin Already exists!!!!");
        throw {reason:'Something went wrong ,Admin Already exists',statusCode:500};;
    }

    
    const newAdmin=createAdminInRepository(adminDetails);
    if(!newAdmin){
        throw {reason:'Something went wrong ,cannot create Admin!!!',statusCode:500};
    }
    return newAdmin;
 }catch(error){
console.log("Error in Admin Service Layer!!!!");
throw Error("Unable to create Admin!!!!");
 }  


}

async function  deleteAdminInService(adminDetails) {

    try{
        const admin=await findAdminInService(
            {regNo:adminDetails.regNo}
        )
    
        if(admin){
            const deleteAdmin=deleteAdminInRepository({
                regNo:adminDetails.regNo
            });
            return deleteAdmin;
            }
    
        
     }catch(error){
        console.log("Error in Admin Service Layer!!!!");
        throw Error("Unable to delete Admin!!!!");
         } 

        }
module.exports={findAdminInService,createAdminInService,deleteAdminInService};