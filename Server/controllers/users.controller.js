<<<<<<< HEAD
const User = require('./../models/user.model.js')

module.exports={
    getUsers:() => {
        let {length=null, offset=null, users = null} = req.query
        
        if(users)  
            users = users.split(',')
        
        if(length && offset){
    
            User.find().skip(offset).limit(10).then(users => { res.status(206).json(users)}).catch(err => { res.status(400).send({err: err.message})})
         
        }else if(users){
            User.find().where('idUser').in(users)
            .then((users) => { res.status(206).json(users) })
            .catch(err => res.status(400).send({error: err.message}))
        }
const User = require("../models/user.model")

module.exports={
    getUsers: () => {
        
    },
    createUser: (req,res) => {
        User.create(req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({error: err.message}))
>>>>>>> 44e1becf0cba561738ec723b94e3791792923cf3
    }

}