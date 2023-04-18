const User = require("../models/user.model")

module.exports={
    getUsers: () => {
        
    },
    createUser: (req,res) => {
        User.create(req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({error: err.message}))
    }
}