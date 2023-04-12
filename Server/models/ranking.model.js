const mongoose = require('mongoose')

const rankingSchema = mongoose.Schema({
  id: { type:Number },
  year: {type: Array },  
  users: {type: Array }
})



module.exports = mongoose.model('rankings', rankingSchema)