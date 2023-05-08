const Badge = require('../models/badge.model')

module.exports={
    getBadges:(req,res) => {
        let {length=null, offset=null, badges = null} = req.query
        if(badges)  
            badges = users.split(',')
        if(length && offset){
            User.find().skip(offset).limit(length).then(badges => { res.status(206).json(badges)}).catch(err => { res.status(400).send({err: err.message})})
        }else if(badges){
            Badge.find().where('_id').in(badges)
            .then((badges) => { res.status(206).json(badges) })
            .catch(err => res.status(500).send({error: err.message}))
        }
    },

    createBadge: async (req,res) => {
        Badge.create(req.body)
        .then((badge) => {res.status(201).send(badge)})
        .catch(err => {res.status(400).send({err:err.message})})
    }
}