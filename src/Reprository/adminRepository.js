const AdminSchema=require('../Schema/AdminSchema')

async function  createAdmin(adminDetails) {
    try{
        const admin=await AdminSchema.create(adminDetails);
        return admin;
            }catch(error){
        console.log(error);
        console.log("The Problem in the Admin Repository!!!");
        throw Error("Internal Server Error!!!")
            }    
}


async function  findAdmin(adminDetails) {
    try{
        const admin=await AdminSchema.findOne(adminDetails);
        return admin;
            }catch(error){
        console.log(error);
        console.log("The Problem in the Admin Repository!!!");
        throw Error("Internal Server Error!!!")
            }    
}

module.exports={createAdmin,findAdmin};

