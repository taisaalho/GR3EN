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
    
    getUsers:(req,res) => {
        /* let {length=null, offset=null, users = null} = req.query
        console.log(req.query)
        if(users)  
            users = users.split(',')
            console.log(users)
        if(length && offset){
    
            User.find().skip(offset).limit(10).then(users => { res.status(206).json(users)}).catch(err => { res.status(400).send({err: err.message})})
         
        }else if(users){
            User.find().where('idUser').in(users)
            .then((users) => { res.status(206).json(users) })
            .catch(err => res.status(500).send({error: err.message}))
        }  */

        
        // user = { primeiroNome:String, ultimoNome:String, ultimoNome:String, escola:String, password : String , email : String,  }
        let {length=null, offset=null, users = null} = req.query

        console.log(req.query)

        if(length && offset){
            User.find().skip(offset).limit(length).then(users => { res.status(206).json(users)}).catch(err => { res.status(400).send({err: err.message})})
        }else if(users){
            
            console.log(users)
            User.find().where('_id').in(users)
            .then((users) => { res.status(206).json(users) })
            .catch(err => res.status(500).send({error: err.message}))
        } 
    },
    register: async (req,res) => {

/*     newUser:(req,res) => {
        User.create(req.body)
        .then((users) => {res.status(200).send(users)})
        .catch((err) => {res.status(400).send({error: err.message})})*/
    }, 

    editUser: (req,res) => {
        User.findOneAndUpdate({_id: res.params.userid}, req.params)
        .select('primeiroNome ultimoNome escola email password questionario conselhoEco')
        .then((user) => {res.status(201).send(user)})
        .catch((err) =>{res.status(500).send({err:err.message})})
    },
    
    deleteUser: (req,res) =>{
        User.findOneAndDelete({_id: res.params.userid}, req.params)
        .then(() => {res.status(204).send({message:`Sucessful deleted`})})
        .catch((err) =>{res.status(500).send({err:err.message})})
    },
    //adcionar
    titles : (req,res) => {
        User.find().where('_id')
        .select('idTitulo')
        .then((users) => { res.status(200).json(users) })
        .catch(err => res.status(500).send({error: err.message}))
    },
    //adicionar
    badges: (req,res) => {
        User.find().where('_id')
        .select('idBadge')
        .then((users) => { res.status(200).json(users) })
        .catch(err => res.status(500).send({error: err.message}))
    }

    ,login:(req,res) => {
        User
    }

    ,register:(req,res) => {
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