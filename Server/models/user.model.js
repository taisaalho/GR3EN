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
<<<<<<< HEAD
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
=======
  id: reqString,
  username: reqString, // or like this {type: type , required: boolean}
  pontos: {
    type: Number,
    default: 0,
   
   
  }
>>>>>>> 44e1becf0cba561738ec723b94e3791792923cf3
})

userSchema.pre('save', function (next) {
  this.pontos = 0;
  next();
});



module.exports = mongoose.model('Users', userSchema)