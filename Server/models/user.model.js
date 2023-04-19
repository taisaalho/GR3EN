const mongoose = require('mongoose')

const reqString = {
  type: String, 
}

const reqArray = {
  type: Array,
}

const reqBoolean = {
  type: Boolean,
}

const reqNumber = {
  type: Number,
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
})



module.exports = mongoose.model('Users', userSchema)