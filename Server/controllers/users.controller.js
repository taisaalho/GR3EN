const User = require('./../models/user.model.js')
const config = require('../config.js')
const bcrypt = require('bcrypt')
const jwtHelpers = require('./Helpers/jwtHelpers.js')


//Created - abc

module.exports={
    /* createUser: (req,res) => {
        User.create(req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({error: err.message}))

    }, */

    getUser:(req,res) => {
            User.findOne({_id: req.params.userid})
            .then((result) => {
                if(result != {}){
                    res.status(200).json(result)
                    console.log(result)
                }else{
                    res.status(404).send({message: "User not found."})
                }
            })
            .catch(err => res.status(500).send({error: err.message}))
        },

    editUser: async (req,res) => {
        if (req.body.password){
            await bcrypt.genSalt().then(
                salt => bcrypt.hash(req.body.password,salt).then( 
                    hash => req.body.password = hash
                )).catch(err => err)
        }

        User.updateOne({_id: req.params.userid}, req.body)
        .then(result => {
            console.log(result)
            if (result.acknowledged){
                if (result.matchedCount >0){
                    if(result.modifiedCount >0){
                        res.status(201).send({message: "User sucessfuly updated."})
                    }else{
                        res.status(400).send({message: "User not updated."})
                    }
                }else{
                    res.status(404).send({message: "User not Found."})
                }
            }else{
                res.status(400).send({message: "Params don't coincide with user object."})
            }
        })
        .catch((err) =>{res.status(500).send({err:err.message})})
    },
    
    deleteUser: (req,res) =>{
        User.deleteOne({_id: req.params.userid})
        .then((result) => {
            if (result.modifiedCount >0 ){
                res.status(204).send({message:`Sucessful deleted`})
            }else{
                res.status(404).send({message: "User not found."})
            }
        })    
        .catch((err) =>{res.status(500).send({err:err.message})})
    },

    titles : (req,res) => {
        User.find().where('_id')
        .select('idTitulo')
        .then((users) => { res.status(200).json(users) })
        .catch(err => res.status(500).send({error: err.message}))
    },
    
    badges: (req,res) => {
        /* User.findOne({_id:req.params.userid,idBadge:req.params.badges})
        .select('idBadge')
        .then((badges) => { res.status(200).json(badges) })
        .catch(err => res.status(500).send({error: err.message})) */

        User.updateOne({_id:req.params.userid},req.body)
        .select('idBadge')
        .then(result => {
            console.log(result)
            if (result.acknowledged){
                if (result.matchedCount >0){
                    if(result.modifiedCount >0){
                        res.status(201).send({message: "User sucessfuly updated,badge added."})
                    }else{
                        res.status(400).send({message: "User not updated,badge not added."})
                    }
                }else{
                    res.status(404).send({message: "User not Found."})
                }
            }else{
                res.status(400).send({message: "Params don't coincide with user object."})
            }
        })
        .catch(err => res.status(500).send({error: err.message}))
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
    register:async (req,res) => {
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
        
    }
}