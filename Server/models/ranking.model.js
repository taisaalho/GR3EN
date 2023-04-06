const mongoose = require('mongoose')

const reqString = {
  type: String, 
}

const rankingSchema = mongoose.Schema({
  id: reqString,
  name: reqString, // or like this {type: type , required: boolean}
  
})

module.exports = mongoose.model('ranking', rankingSchema)