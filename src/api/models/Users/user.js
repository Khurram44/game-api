
// import database
var db = require('../../database/database')
//create model/schema for table
var Users = function(users) {

this.id = users.id;
this.user_name = users.user_name;
this.email  = users.email;
this.password = users.password;
this.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
this.updated_at = new Date().toISOString().slice(0, 19).replace('T', ' ')


}   

//Get users model
Users.getResult = (result) => {
    db.query('SELECT * from user', (err,res)=>{
        if(err){
            console.log('error while fetching', err)
            result(null,err)
        }
        else {
            console.log('fetched successfully', res)
            result(null,res)
        }
    })
}

//Get users by ID model
Users.getUsersByID=(id,result)=>{
    db.query('SELECT * from user WHERE id=?',id,(err,res)=>{
        if(err)
        {
            console.log("error while fetching")
            result(null,err)

        }
        else{
            console.log("selected by ID")
            result(null,res)
        }
    })
}


//Create model
Users.createUsers=(EmpReqData, result)=>{
    db.query('INSERT into user SET ?', EmpReqData,(err,res)=>{
        if(err)
        {
            console.log(err)
            result(null,{status:false, message:err})
        }
        else{
            console.log("Inserted succcessfully")
            result(null,{status:true,message:"Success"})
        }
    })

}

//Update Model
// Users.updateUsers=(id,data,result)=>{

//     db.query('UPDATE users SET first_name=?,last_name=?,email=?,password=?,profile_pic=?,phone_no=?,hourly_rate=?,is_confirmed=?,is_deleted=?,added_on=?,dob=?,clinic_address=?,gender=?,reg_no=?,district=?,location=?,area_of_interest=?,qualification=?,membership_id=?,description=?,bank_id=?,allergies=?,medications=?,experience=?,is_featured=?,is_blocked=?,updated_at=? WHERE id=?',
//     [data.first_name,data.last_name,data.email,data.password,data.profile_pic,data.phone_no,data.hourly_rate,data.is_confirmed,data.is_deleted,data.added_on,data.dob,data.clinic_address,data.gender,data.reg_no,data.district,data.location,data.area_of_interest,data.qualification,data.membership_id,data.description,data.bank_id,data.allergies,data.medications,data.experience,data.is_featured,data.is_blocked,new Date().toISOString().slice(0, 19).replace('T', ' '),id],(err,res)=>{
//         if(err)
//         {
//             console.log(err)
//             result(null,err)
//         }
//         else
//         {
//             console.log("success")
//             result(null,{status:true,message:"UPDATED",id:res.id})
//         }
//     })

// }


//Delete model
Users.deleteUsers = (id,result)=>{
    db.query('DELETE FROM user WHERE id=?',[id],(err,res)=>{
        if(err)
        {
            console.log("Unable to delete")
            result(null,err)
        }
        else
        {
            console.log("Deleted successfully")
           result(null,res)
        }
    })
}
module.exports = Users