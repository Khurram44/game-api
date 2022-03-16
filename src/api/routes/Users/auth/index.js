const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../../controllers/Users/auth/index");
 router.post('/',UserController.AddUsers)
 router.put('/update/:id',UserController.UpdateUsers)
 router.post('/login',UserController.LoginUser)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router