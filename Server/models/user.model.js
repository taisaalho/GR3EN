const mongoose = require('mongoose')

const reqString = {
  type: String,
  required:true, 
}

const reqArray = {
  type: Array,
  required:true, 
}

const reqNumber = {
  type: Number,
  required:true, 
}

const reqBoolean = {
  type: Number,
  required:true, 
}

const userSchema = mongoose.Schema({
  id: reqString,
  username: reqString, // or like this {type: type , required: boolean}
  pontos: {
    type: Number,
    default: 0,
   
   
  }
})

userSchema.pre('save', function (next) {
  this.pontos = 0;
  next();
});



module.exports = mongoose.model('users', userSchema)