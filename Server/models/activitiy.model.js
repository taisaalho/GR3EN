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

const activitySchema = mongoose.Schema({
  idAtividade:reqNumber,
  participantesAtividade: reqArray,
  nomeAtividade:reqString,
  descAtividade: reqString,
  imagemAtividade: reqString,
  dataHoraAtividade: reqString,
  localAtividade: reqString,
  coordenadorAtividade: reqString,
  pontosAtividades: reqNumber,
  statusAtividade: reqBoolean,
})

module.exports = mongoose.model('activities', activitySchema)