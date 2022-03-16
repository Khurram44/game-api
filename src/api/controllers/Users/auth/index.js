var module = require("../../../models/Users/auth/index")


exports.AddUsers=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createUsers(data,(err,emp)=>{
         if(err)
         {
            res.send(err)
         }
         else{
            res.json({status:true, message:emp.message})
         }
      })
      console.log("valid data")
   }
}

exports.LoginUser=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.loginUsers(data,(err,emp)=>{
         if(err)
         {
            res.send(err)
         }
         else{
            res.json({status:true, message:emp.message,token:emp.token})
         }
      })
      console.log("valid data")
   }
}



//Update Users model
exports.UpdateUsers=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateUsers(req.params.id,data,(err,emp)=>{
         if(err)
         {
            res.send(err)
         }
         else{
            res.json({status:true, message:"Success",data:emp.InsertId})
         }
      })
      console.log("valid data")
   }

}