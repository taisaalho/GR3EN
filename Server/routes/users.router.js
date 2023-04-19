const express = require('express')
const router = express.Router()
const {auth_user,auth_admin} = require('../controllers/auth.controller') // Authentication Middleware 

const User = require('../models/user.model')

/* const user = new User({
    id:1,
    name:'Tiago'
}) */

router.route('/users')
    .get(auth_user,(req, res) => {
        req.params = offset,length,activities
        /* res.json(user) */

        /* if (auth_user){
            res.status(200).send("Successful request")
        }else{
            res.status(206).send("Sucessful request (Partial data)")
        }


        if (false){
            res.status(500).send("Something went wrong.Please try again later.")
        }
 */

    }).post(auth_user,(req, res) => {
        req.params = body

        /* res.status(200).send("Successful request")

        if (false){
            res.status(401).send(`Missing Fields.The fields are ${}.`)
        }

        if (false){
            res.status(500).send("Something went wrong.Please try again later.")
        } */


    })


router.route('/users/:userid')
    .get(auth_user,(req,res) => {
        req.params.userid

        /* if (auth_user){
            res.status(200).send("Successful request")
        }else{
            res.status(206).send("Sucessful request (Partial data).")
        }

        if(false && auth_user == false){
          res.status(401).send("Auth_key is not valid")
        }else if(false && auth_user){
            res.status(403).send("Request user auth_key does not match your auth_key")
        } */

        
    })


router.all('*', (req, res) => {
    /* res.status(404).json({ message: 'MOVIES: what???' }); //send a predefined error message */
})
        
module.exports = router