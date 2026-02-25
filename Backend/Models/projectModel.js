const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({

    title:{
        type:String,
        reaquired:true,
    },
    language:{
        type:String,
        reaquired:true
    },
     github:{
        type:String,
        reaquired:true,
        unique:true
    },
    overview:{
        type:String,
        reaquired:true
    },
     projectImg:{
        type:String,
        reaquired:true
    },
    userId:{
        type:String,
        reaquired:true
    }

})
const projects=mongoose.model("projects",projectSchema)
module.exports=projects