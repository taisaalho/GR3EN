const mongoose = require('mongoose')

const reqArray = {
  type: Array,
  required:true, 
}

const reqNumber = {
  type: Number,
  required:true, 
}

const reqBoolean = {
  type: Boolean,
  required:true, 
}

const reqString = {
  type: String,
  required:true, 
}



const userSchema = mongoose.Schema({
  idUser: reqNumber,
  primeiroNome: reqString,
  ultimoNome: reqString,
  escola: reqString,
  email: reqString,
  password: reqString,
  idBadge: reqArray, 
  idTitulo: reqArray, 
  questionario: reqBoolean, 
  ranking: reqNumber, 
  idOcorrencia: reqArray, 
  idAtividade: reqArray, 
  conselhoEco: reqBoolean, 
  pontos: {
    type: Number,
    default: 0,
  }
  
})

userSchema.pre('save', function (next) {
  this.pontos = 0;
  next();
});



module.exports = mongoose.model('Users', userSchema)