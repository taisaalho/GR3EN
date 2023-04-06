const mongoose = require('mongoose')

const reqString = {
  type: String, 
}

const activitySchema = mongoose.Schema({
  id: reqString,
  username: reqString, // or like this {type: type , required: boolean}
})

module.exports = mongoose.model('activities', activitySchema)