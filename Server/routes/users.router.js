const express = require('express')
const router = express.Router()
const {auth_user,auth_admin} = require('../controllers/auth.controller') // Authentication Middleware 
const {getUsers,newUser,editUser,deleteUser,titles,badges} = require('../controllers/users.controller.js')
const User = require('../models/user.model')

/* const user = new User({
    id:1,
    name:'Tiago'
}) */

router.route('/')
    .get(auth_user,getUsers)
    .post(auth_user,newUser)

router.route('/:userid')
    .get(auth_user,getUsers)
    .put(auth_user,editUser)
    .delete(auth_user,deleteUser)

router.route('/:userid/titles')
    .post(auth_user,titles)

router.route('/:userid/badges')
    .post(auth_user,badges)

/* router.route('/login')
    .post(auth_user) */

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Not found' })
})

module.exports = router