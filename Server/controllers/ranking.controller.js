const Ranking = require("./../models/ranking.model")
const User = require("./../models/user.model")

module.exports={
    createRanking: (req,res) => {

        Ranking.create(req.body)   
        .then((ranking) => { res.status(201).send(ranking)})
        .catch((err) => { 
            res.status(400).send({error: err.message})
        })
    },
    getRankings: (req,res) => {

    }
}