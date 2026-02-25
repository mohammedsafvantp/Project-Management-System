require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')
require('./Db/dbConnection')


const server=express()
server.use(cors())
server.use(express.json())
server.use(router)
server.use('/uploads',express.static('./uploads'))


PORT=process.env.PORT||3000

server.listen(PORT,()=>{
    console.log(`Server Running at PORT=${PORT}`);
    
})

server.get('/',(req,res)=>{
    
    res.status(200).send("server running at port 3000 and waiting for client request!!!!!")
})
