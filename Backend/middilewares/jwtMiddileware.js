const jwt=require('jsonwebtoken')

const jwtMiddileware=(req,res,next)=>{
    console.log("indide jwt");
    
console.log(req.headers);
    const token=req.headers['authorization'].split(" ")[1]   
    if(token){

        try{
        const   jwtResponse=jwt.verify(token,process.env.JWT_PASSWORD)
        console.log(jwtResponse);
        req.userId=jwtResponse.userId
        next()       
        }
        catch(err){
            res.status(406).json("authentication failed!!.... please login")       
        }
    }
    else{
        res.status(401).json("authentication failed!!...token is missing")
    }
    
}
module.exports=jwtMiddileware