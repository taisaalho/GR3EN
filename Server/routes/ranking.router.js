const express = require('express')
const router = express.Router()
const {auth_user,auth_admin} = require('../controllers/auth.controller') // Authentication Middleware 
const {createRanking,getRankings} = require('../controllers/ranking.controller')

router.route('/')
.post(createRanking,(req,res) => {

    res.status(200);
    res.send("Successful request")
    
    if(false){
        res.status(206);
        res.send("Successful request (Partial data)")
    }
    
    if(false){
        res.status(400)
        res.send("Incorrect query use (you must use offset and length at the same time)") 
    }

    if(false){
        res.status(400)
        res.send("Only numbers are allowed") 
    }
})
.get(getRankings,(req,res) => {
    
    res.status(201);
    res.send("New school year rank created")
    
    if(false){
        res.status(401);
        res.send("Invalid auth_key")
    }
    
    if(false){
        res.status(403)
        res.send("You’re not authorized to create a new ranking") 
    }

    }
)

module.exports = router