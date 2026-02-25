const users = require("../Models/userModel");
const jwt=require('jsonwebtoken')

exports.registerController= async(req,res)=>{
    console.log("inside register controller");
    
    const {name,email,password}=req.body
    
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("user already exist")
        }
        else{
            const newUser = new users({name,email,password})
            await newUser.save()
            res.status(200).json(newUser)
        }

    }
    catch(err){
        res.status(401).json(err)
    }
    
}

exports.loginController= async(req,res)=>{
    console.log("inside login controller");

    const {email,password}=req.body

    try{
        const existingUser=await users.findOne({email,password})
        if(existingUser){
            // generate token
            const token=jwt.sign({userId:existingUser._id},process.env.JWT_PASSWORD)
            res.status(200).json({user:existingUser,token})
        }
        else{
            res.status(404).json("invalid email/password")
        }
    }
    catch(err){
        res.status(401).json(err)

    }
    
}