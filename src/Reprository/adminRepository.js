const AdminSchema=require('../Schema/AdminSchema')

async function  createAdminInRepository(adminDetails) {
    try{
        const admin=await AdminSchema.create(adminDetails);
        return admin;
            }catch(error){
        console.log(error);
        console.log("The Problem in the Admin Repository!!!");
        throw Error("Internal Server Error!!!")
            }    
}


async function  findAdminInRepository(adminDetails) {
    try{
        const admin=await AdminSchema.findOne(adminDetails);
        return admin;
            }catch(error){
        console.log(error);
        console.log("The Problem in the Admin Repository!!!");
        throw Error("Internal Server Error!!!")
            }    
}

async function deleteAdminInRepository(adminDetails){
    try{
        const admin=await AdminSchema.findOneAndDelete(adminDetails);
        return admin;
            }catch(error){
        console.log(error);
        console.log("The Problem in the Admin Repository!!!");
        throw Error("Internal Server Error!!!")
            }    
}

module.exports={createAdminInRepository,findAdminInRepository,deleteAdminInRepository};

