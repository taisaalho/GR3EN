

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const User = defineStore('user', {
  state: () => ({
    users: [{
      name:"",
    }]
  })
  
})

export const Atividade = defineStore('atividade',{
  state: () => ({
    atividades: [{
      nome: " ",
      descrição: " ",
      numInscrições: 0,
      data: " ",
      organizador: " ", 
      user: " ",
      pontos: " ",
    }],
  }),
})

export const Ocorrência = defineStore('ocorrência',{
  state: () => ({
    ocorrências: [{
      nome: " ",
      descrição: " ",
      estado: " ",
      data: " ",
      user: " ",
      foto: " ",
      pontos: " ",
    }],
  }),


  getters:{
    /* ATIVIDADES */
    getAtividades: (state) => state.atividades,

    //Nome da Atividade
    getAtividadesNome: (state) =>
    (nome) => state.atividades.find(atividade => atividade.nome == nome),

    //Descrição da Ativadade
    getAtividadesDescrição: (state) => 
    (descrição) => state.atividades.filter(atividade => atividade.descrição == descrição),

    //Inscrições de User da Atividade
    getAtividadesNumInscrições: (state) => 
    (numInscrições) => state.atividades.filter(atividade => atividade.numInscrições == numInscrições),

    //Data da Atividade
    getAtividadesData: (state) =>
    (data) => state.atividades.filter(atividade => atividade.data == data),

    //Organizador da Atividade
    getAtividadesOrganizador: (state) =>
    (organizador) => state.atividades.filter(atividade => atividade.organizador ==  organizador),

    //User a participar na Atividade
    getAtividadesUser: (state) =>
    (user) => state.atividades.filter(atividade => atividade.user == user),

    //Pontos que a Atividade dá ao User
    getAtividadesUserUser: (state) =>
    (pontos) => state.atividades.filter(atividade => atividade.pontos == pontos),

    /* Ocorrências */
    //Nome da Ocorrência
    getOcorrênciasNome: (state) =>
    (nome) => state.ocorrências.filter(ocorrência => ocorrência.nome == nome),

    //Descrição da Ocorrência
    getOcorrênciasDescrição: (state) =>
    (descrição) => state.ocorrências.filter(ocorrência => ocorrência.descrição == descrição),

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

