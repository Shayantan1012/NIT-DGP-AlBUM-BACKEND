

async function postImageByAdmin(req,res){
try{
console.log("This is request body->",req.body);

return res.status(200).send("Request received");
}
catch(error){
    console.log(error);
    console.log("")
}
}


module.exports={postImageByAdmin}