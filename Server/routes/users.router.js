const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

const {createUser} = require('../controllers/users.controller')

const user = new User({
    id:1,
    name:'Tiago'
})

router.route('/')
    .get((req, res) => {
        
    }).post(createUser

    )


module.exports = router