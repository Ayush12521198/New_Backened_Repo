const express=require('express')
const { loginController ,registerController} = require('../controllers/userController')

//router object
const router=express.Router()

//routers
//POST || Login user
router.post('/login',loginController)

//POST || Registered user
router.post("/register",registerController);
module.exports=router