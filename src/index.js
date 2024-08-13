const express=require('express')
const ConnectDB=require('./Config/db_config')
const ServerConfig=require('./Config/server_config')
const eventRoutes=require('./Route/eventRoute')
const campusRouter=require('./Route/campusRoute')
const departmentRouter=require('./Route/departmentRoute')
const userRouter=require('./Route/userRouter')
const cookieParser=require('cookie-parser')
const app=express()
app.use(cookieParser())
app.use(express.urlencoded({
        extended: true
      }));
      
app.use(express.text());
app.use(express.json());

app.use('/admin/campus',campusRouter)
app.use('/admin/events',eventRoutes)
app.use('/admin/departments',departmentRouter)

app.use('/user',userRouter)

app.listen(ServerConfig.PORT,async()=>{
    try{
        await ConnectDB();
        console.log(`Succfully Connected to Server at Port ${ServerConfig.PORT}`)
        }
        catch(error){
console.log('Sorry Canot Connect to Server!!!!');
        }
})