const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({


    name:{
        type:String,
        reaquired:true,
    },
    email:{
        type:String,
        reaquired:true,
        unique:true
    },
    password:{
        type:String,
        reaquired:true,
    },

})
const users=mongoose.model("users",userSchema)

module.exports=users