import { defineStore } from 'pinia'

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ATIVIDADES
let atividades
if (!JSON.parse(localStorage.getItem('atividades'))){
  atividades = [{
    idAtividade: 0,
    nomeAtividade: "",
    idUser: [],
    descAtividade: " ",
    imagemAtividade: " ",
    dataHoraAtividade: " ",
    localAtividade: " ",
    coordenadorAtividade: [],
    pontosAtividades: 0,
    statusAtivdidade: false,

  }]
  localStorage.setItem('atividades', JSON.stringify(atividades))
}else{
  atividades = JSON.parse(localStorage.getItem('atividades'))
}

export const Atividade = defineStore('atividade',{
  state: () => ({
    atividades: atividades
  }),

  getters: {
    /* ATIVIDADES */ //Não completo
    //Get de toda a informação das Atividades
    getAtividade: (state) => state.atividades,

    //Nome da Atividade
    getAtividadesNome: (state) =>
    (nomeAtividade) => state.atividades.find(atividade => atividade.nomeAtividade == nomeAtividade),

    //Descrição da Ativadade
    getAtividadesDescrição: (state) => 
    (descrição) => state.atividades.filter(atividade => atividade.descrição == descrição),

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
  }
})

