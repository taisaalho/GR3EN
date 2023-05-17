const Badge = require('../models/badge.model')
const User = require('../models/user.model')

module.exports={
    getBadge1:(req,res) => {
        /* let {length=null, offset=null, badges = null} = req.query
        if(badges)  
            badges = users.split(',')
        if(length && offset){
            User.find().skip(offset).limit(length).then(badges => { res.status(206).json(badges)}).catch(err => { res.status(400).send({err: err.message})})
        }else if(badges){
            Badge.find().where('_id').in(badges)
            .then((badges) => { res.status(206).json(badges) })
            .catch(err => res.status(500).send({error: err.message}))
        } */

       /*  User.findOne({_id: req.params.userid})
            .then((result) => {
                if(result != {}){
                    res.status(200).json(result)
                    console.log(result)
                }else{
                    res.status(404).send({message: "User not found."})
                }
            })
            .catch(err => res.status(500).send({error: err.message})) */

        User.findByIdAndUpdate({_id: req.params.userid})
            
    },

    createBadge: async (req,res) => {
        Badge.create(req.body)
        .then((badge) => {res.status(201).send(badge)})
        .catch(err => {res.status(400).send({err:err.message})})
    }
}