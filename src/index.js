const express=require('express')
//const cookieParser = require('cookie-parser');
const ConnectDB=require('./Config/db_config')
const ServerConfig=require('./Config/server_config')
const eventRoute=require('./Route/eventRoute')
const cors=require('cors')
const app=express()
app.use(express.text());
app.use('/events',eventRoute);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.listen(ServerConfig.PORT,async()=>{
    try{
        await ConnectDB();
        console.log(`Succfully Connected to Server at Port ${ServerConfig.PORT}`)
        }
        catch(error){
console.log('Sorry Canot Connect to Server!!!!');
        }
})