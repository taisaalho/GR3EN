const mongoose = require('mongoose')

const reqString = {
  type: String,
}

const userSchema = mongoose.Schema({
  id: reqString,
  user: reqString,
  
})

module.exports = mongoose.model('users', userSchema)