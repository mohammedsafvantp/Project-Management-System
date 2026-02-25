const projects=require('../Models/projectModel')

exports.addProjectController=async(req,res)=>{
    console.log("inside addprojectControler controller");

    const userId=req.userId
    const {title,language,github,overview}=req.body
    const projectImg=req.file.filename

    try{
        const existingProject = await projects.findOne({github})

        if(existingProject){
            res.status(406).json("project already exist ...please add another one")
        }
        else{
            const newProject=new projects({title,language,github,overview,projectImg,userId})
            await newProject.save()
            res.status(200).json(newProject)
        }

    }
    catch(err){
        res.status(401).json(err)

    }
       
    
}

exports.getAllProjectController=async(req,res)=>{
    
    console.log("inside all projectcontroller");

    const searchKey=req.query.search
    

    try{
        const allProjects=await projects.find()
        res.status(200).json(allProjects)

    }
    catch(err){
        res.status(202).json(err)

    }
    
}

exports.getHomeProjectController=async(req,res)=>{
    
    console.log("inside home projectcontroller");
    


    try{
        const homeProjects=await projects.find().limit(3)
        res.status(200).json(homeProjects)

    }
    catch(err){
        res.status(202).json(err)

    }
    
}