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
  default:false
}

const reqString = {
  type: String,
  required:true, 
}


const userSchema = mongoose.Schema({
  _id: reqNumber,
  primeiroNome: reqString,
  ultimoNome: reqString,
  escola: reqString,
  email: reqString,
  password: reqString,
  idBadge: reqArray,
  idTitulo: reqArray,
  questionario: reqBoolean,
  ranking: {
    type: Number,
    defaul: 0
  }, 
  idOcorrencia: reqArray,  
  idAtividade: reqArray,  
  conselhoEco: reqBoolean,
  pontos: {
    type: Number,
    default: 0
  }
})

userSchema.pre('save', async (next) => {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)

  this.pontos = 0;

  next();
});






module.exports = mongoose.model('Users', userSchema)  
