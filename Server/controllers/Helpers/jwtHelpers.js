const jwt = require('jsonwebtoken')
const config = require('../../config')

module.exports = {
    createToken : (id)=>{
        return jwt.sign({id}, config.jwtSecret, {
            expiresIn: maxAge,
            httpOnly:true,
        })
    },
    verifyToken:(token)=>{
        return jwt.verify(token,config.jwtSecret)
    },
    decodeToken:(token)=>{
        jwt.decode(token,config.jwtSecret)
    }
}