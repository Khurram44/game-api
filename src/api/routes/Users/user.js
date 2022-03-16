const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../controllers/Users/user");
 router.get('/', UserController.getList)
 router.get('/:id',UserController.getUsersByID)
  router.post('/',UserController.AddUsers)
 router.delete('/delete/:id',UserController.deleteUsers)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router