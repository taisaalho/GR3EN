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
    dataHoraOcorrencia: " ",
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
    getOcorrênciasNome: (state) =>
    (nome) => state.ocorrencias.filter(ocorrencia => ocorrencia.nome == nome),

    //Descrição da Ocorrência
    getOcorrênciasDescrição: (state) =>
    (descrição) => state.ocorrencias.filter(ocorrencia => ocorrencia.descrição == descrição),

    //Estado da Ocorrência
    getOcorrênciasEstado: (state) =>
    (estado) => state.ocorrências.filter(ocorrência => ocorrência.estado == estado),

    //Data da Ocorrência
    getOcorrênciasData: (state) =>
    (data) => state.ocorrências.filter(ocorrência => ocorrência.data == data),

    //User que reportou a Ocorrência
    getOcorrênciasUser: (state) =>
    (user) => state.atividades.filter(atividade => atividade.user == user),
  },
})
