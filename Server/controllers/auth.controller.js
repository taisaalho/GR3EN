const jwt = require('jsonwebtoken')


module.exports={
    auth_user:(req,res,next)=>{
        
        if(true){
            next()
        }else{
            res.status(403)
            res.send("Auth key does not match user auth key") 
        }
    },
    auth_admin:(req,res,next)=>{
        
        if(true){
            next()
        }else{
            res.status(403)
            res.send("You are not allowed to delete an activity") 
        }
    },
    auth_verifier:(req,res,next)=>{
        
        if(true){
            next()
        }else{
            res.status(403)
            res.send("You are not allowed to delete an activity") 
        }
    },
}