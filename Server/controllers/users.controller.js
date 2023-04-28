const User = require('./../models/user.model.js')

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
            .catch(err => res.status(500).send({error: err.message}))
        }
    },

    /* getPartUser: () => {
        // user = { primeiroNome:String, ultimoNome:String, ultimoNome:String, escola:String, password : String , email : String,  }
        let {length=null, offset=null, users = null} = req.query
        
        if(users)  
            users = users.split(',')
        
        if(length && offset){
    
            User.find().skip(offset).limit(10).then(users => { res.status(206).json(users)}).catch(err => { res.status(400).send({err: err.message})})
         
        }else if(users){
            User.find().where('idUser').in(users)
            .then((users) => { res.status(206).json(users) })
            .catch(err => res.status(500).send({error: err.message}))
        } 
    }, */

    newUser:() => {
        User.create(req.body)
        .then((users) => {res.status(200).send(users)})
        .catch((err) => {res.status(400).send({error: err.message})})
    },

    login:() => {
        User.find({email: res.params.email},req.params)
    },


    editUser: () => {
        User.findOneAndUpdate({idUser: res.params.userid}, req.params)
        .then((user) => {res.status(201).send(user)})
        .catch((err) =>{res.status(500).send({err:err.message})})
    },
    
    deleteUser: () =>{
        User.findOneAndDelete({idUser: res.params.userid}, req.params)
        .then((user) => {res.status(204).send({message:"Sucessful delete request"})})
        .catch((err) =>{res.status(500).send({err:err.message})})
    }
}
