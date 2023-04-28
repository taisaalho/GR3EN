const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

userSchema.pre('save', async (next) => {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)

  this.pontos = 0;

  next();
});






module.exports = mongoose.model('Users', userSchema)  