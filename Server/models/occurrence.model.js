const mongoose = require('mongoose')

const reqString = {
  type: String,
  required:true,
  immutable:true 
}

const reqNumber = {
  type: Number,
  required:true,
  immutable:true 
}

const reqBoolean ={
  type: Boolean,
  required:true,
}

const occurrenceSchema = mongoose.Schema({
  idOcorrencia: reqString,
  nomeOcorrencia: reqString,
  descricaoOcorrencia: reqString,
  localOcorrencia: reqString,
  dataOcorrencia: reqString,
  idUser : reqNumber,
  fotoOcorrencia: reqString,
  pontosOcorrencia: {type:Number, required:true},
  categoriaOcorrencia: reqString,
  statusOcorrencia:reqBoolean,
  // or like this {type: type , required: boolean}
  
})

module.exports = mongoose.model('occurrences', occurrenceSchema)