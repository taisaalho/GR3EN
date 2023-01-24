import { defineStore } from 'pinia'

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//OCORRÊNCIAS
let ocorrencias
if (!JSON.parse(localStorage.getItem('ocorrencias'))){
  ocorrencias: [{
    idOcorrencia: 0,
    nomeOcorrencia: " ",
    descriçaoOcorrencia: " ",
    localOcorrencia: " ",
    dataHoraOcorrencia: (newDate).toString().split(' '),
    idUser: 0,
    fotoOcorrencia: " ",
    pontosOcorrencias: 0,
    categoriaOcorrencia: " ",
    statusOcorrencia: false,
  }]
  localStorage.setItem('ocorrencias', JSON.stringify(ocorrencias))
}else{
  ocorrencias = JSON.parse(localStorage.getItem('ocorrencias'))
}

export const Ocorrencia = defineStore('ocorrencia',{
  state: () => ({
    ocorrencias: ocorrencias
  }),

  getters:{
    /* Ocorrências */ 
    //Nome da Ocorrência
    getNomeOcorrencias: (state) =>
    (nomeOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.nomeOcorrencia == nomeOcorrencia),

    //Descrição da Ocorrência
    getDescOcorrencias: (state) =>
    (descriçaoOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.descriçaoOcorrencia == descriçaoOcorrencia),

    //Estado da Ocorrência
    getStatusOcorrencia: (state) =>
    (statusOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.statusOcorrencia == statusOcorrencia),

    //Data da Ocorrência
    getDataHoraOcorrencia: (state) =>
    (dataHoraOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.dataHoraOcorrencia == dataHoraOcorrencia),

    //Local da Ocorrência
    getLocalOcorrência: (state) =>
    (localOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.localOcorrencia == localOcorrencia),

    //Local da Ocorrência
    getUserOcorrência: (state) =>
    (idUser) => state.ocorrencias.filter(ocorrencia => ocorrencia.idUser == idUser),

    //Foto da Ocorrência
    getFotoOcorrência: (state) =>
    (fotoOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.fotoOcorrencia == fotoOcorrencia),

    //Foto da Ocorrência
    getPontosOcorrência: (state) =>
    (pontosOcorrencias) => state.ocorrencias.filter(ocorrencia => ocorrencia.pontosOcorrencias == pontosOcorrencias),

    //Categoria da Ocorrência
    getCategoriaOcorrência: (state) =>
    (categoriaOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.categoriaOcorrencia == categoriaOcorrencia),
    
  },

  actions: {
    addOcorrencia(nome,desc,local,idUser,foto,categoria){
        this.ocorrencias.push({
            idOcorrencia: this.ocorrencias[this.ocorrencias.length - 1].idOcorrencia + 1,
            nomeOcorrencia: nome,
            descriçaoOcorrencia: desc,
            localOcorrencia: local,
            dataHoraOcorrencia: (newDate).toString().split(' '),
            idUser:idUser,
            fotoOcorrencia: foto,
            pontosOcorrencias: 0,
            categoriaOcorrencia: categoria,
            statusOcorrencia: false,
        })
        localStorage.setItem('users',JSON.stringify(this.users))
    },
  },
})
