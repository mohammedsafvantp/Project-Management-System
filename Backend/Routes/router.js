const express=require('express')

const userController=require('../Controller/userController')
const projectController=require('../Controller/projectController')
const router=express.Router()
const jwtMiddileware=require('../middilewares/jwtMiddileware')
const multerMiddileware=require('../middilewares/multerMiddileware')



router.post('/register',userController.registerController)

router.post('/login',userController.loginController)

router.post('/add-project',jwtMiddileware,multerMiddileware.single('projectImg'),projectController.addProjectController)

router.get('/get-home-projects',projectController.getHomeProjectController)

router.get('/get-all-projects',jwtMiddileware,projectController.getAllProjectController)

module.exports =router;