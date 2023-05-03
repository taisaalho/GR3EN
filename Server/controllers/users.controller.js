const User = require('./../models/user.model.js')
const config = require('../config.js')
const bcrypt = require('bcrypt')
const jwtHelpers = require('./Helpers/jwtHelpers.js')

module.exports={
    createUser: (req,res) => {
        User.create(req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({error: err.message}))

    },
    getUsers:() => {
        let {length=null, offset=null, users = null} = req.query
        
        if(users)  
            users = users.split(',')
        
        if(length && offset){
    
            User.find().skip(offset).limit(10).then(users => { res.status(206).json(users)}).catch(err => { res.status(400).send({err: err.message})})
         
        }else if(users){
            User.find().where('idUser').in(users)
            .then((users) => { res.status(206).json(users) })
            .catch(err => res.status(400).send({error: err.message }))
        }
    },
    login: async (req,res) => {
        console.log(req.body)
        User.findOne({'email':req.body.email}).then(user => {
        
            bcrypt.compare(req.body.password,user.password).then(result => {
                console.log(result)
                if(result){
                    const token = jwtHelpers.createToken(user.id)
                    res.status(200).cookie('jwt',token).json({Token:token})
                }else{
                    res.status(400).json({error: 'Wrong Password'})
                }
            })
           
        }).catch(err => res.status(400))

    },
    register: async (req,res) => {

        await bcrypt.genSalt().then(
            salt => bcrypt.hash(req.body.password,salt).then( 
                hash => req.body.password = hash
            )).catch(err => err)
           
        User.create(req.body)
        .then(user => {
            const token = jwtHelpers.createToken(user.id)
            res.status(200).cookie('jwt',token).json({Token:token})
        })
        .catch(err => res.status(400).json({error: err.message}))
    },LOG:(req,res)=>{
        console.log(req.body)
    }
}