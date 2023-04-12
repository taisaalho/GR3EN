const express = require('express')
const {auth_user,auth_admin} = require('../controllers/auth.controller') // Authentication Middleware 
const router = express.Router()
const { getActivities, createActivity, addUserToActivity, editActivity, deleteActivity,RemoveUserFromActivity } = require('./../controllers/activities.controller') 

router.route('/')
    .get(getActivities,(req,res)=>{
        //req.params = offset,length,activities
     
    
        if(false){
            res.status(206);
            res.send("Successful request (Partial data)")
        }

        if(false){
            res.status(400);
            res.send("Incorrect query use (you must use offset and length at the same time")
        }
        
        if(false){
            res.status(400);
            res.send("Only numbers are allowed)")
        }
      
    }

    ).post(auth_admin, createActivity, (req,res)=>{
        //req.params = offset,length,activities
        req.body
        

        res.status(201);
        res.send("Successful request")

        if(false){
            res.status(400);
            res.send("Fields missing (The fields are: …)")
        }
        
        if(false){
            res.status(401);
            res.send("Invalid auth_key")
        }
        
        if(false){
            res.status(403)
            res.send("You are not allowed to create an activity") 
        }
       
      
    }
        
    )

router.route('/:activityid')
    .put(auth_user,editActivity,(req, res) => {
        
        res.status(201);
        res.send("Successfully a        ltered")

        if(false){
            res.status(401);
            res.send("Invalid auth_key")
        }
        
        if(false){
            res.status(403)
            res.send("You are not allowed to edit an activity") 
        }

        if(false){
            res.status(404)
            res.send("Activity not found") 
        }
       
    }
        
    )
    .delete(auth_admin,deleteActivity,(req,res)=> {
        res.status(204);
        res.send("Successful Delete request")

        if(false){
            res.status(401);
            res.send("Invalid auth_key")
        }
        
        if(false){
            res.status(403)
            res.send("You are not allowed to delete an activity") 
        }

        if(false){
            res.status(404)
            res.send("Activity not found") 
        }
    }
        
    )

router.route('/:activityid/users/:userid')
    .post(auth_user,addUserToActivity)
    .delete(auth_user,RemoveUserFromActivity)

module.exports = router
