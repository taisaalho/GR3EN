const express = require('express')
const router = express.Router()
const {getUsers,register,login} =require('../controllers/users.controller')
const {auth_user,auth_admin} = require('../controllers/auth.controller') // Authentication Middleware 
const {getUsers,newUser,editUser,deleteUser,titles,badges} = require('../controllers/users.controller.js')
const User = require('../models/user.model')


router.route('/')
    .post(register)

        /* res.status(200).send("Successful request")

        if (false){
            res.status(401).send(`Missing Fields.The fields are ${}.`)
        }

        if (false){
            res.status(500).send("Something went wrong.Please try again later.")
        } */
        
        
router.route('/login').get(login)

router.route('/:userid')
    .get(auth_user,getUsers)
    .put(auth_user,editUser)
    .delete(auth_user,deleteUser)





module.exports = router