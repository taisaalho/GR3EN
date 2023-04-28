const User = require('../models/user.model')
const {createToken,decodeToken,verifyToken} = require('./Helpers/jwtHelpers')

module.exports={
    auth_user:(req,res,next)=>{
        //VERIFY TOKEN
        
        //THEN DECODE TOKEN
        
        
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
            res.send("You are not allowed to use this route: You're not an admin") 
        }
    },
    auth_verifier:(req,res,next)=>{
        
        if(true){
            next()
        }else{
            res.status(403)
            res.send("You are not allowed to use this route: You're not a verifier") 
        }
    },
}