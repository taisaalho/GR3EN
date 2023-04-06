const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

const user = new User({
    id:1,
    name:'Tiago'
})

router.route('/')
    .get((req, res) => {
        res.json(user)
    }).post()


module.exports = router