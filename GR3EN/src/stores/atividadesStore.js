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
    statusAtivididade: false,

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
    getNomeAtividade: (state) =>
    (nomeAtividade) => state.atividades.find(atividade => atividade.nomeAtividade == nomeAtividade),

    //Descrição da Ativadade
    getDescAtividade: (state) => 
    (descAtividade) => state.atividades.filter(atividade => atividade.descAtividade == descAtividade),

    //Data e Hora da Atividade
    getDataHoraAtividade: (state) =>
    (dataHoraAtividade) => state.atividades.filter(atividade => atividade.dataHoraAtividade == dataHoraAtividade),

    //Organizador da Atividade
    getCoordenadorAtividade: (state) =>
    (coordenadorAtividade) => state.atividades.filter(atividade => atividade.coordenadorAtividade ==  coordenadorAtividade),

    //Users na Atividade
    getAtividadesUser: (state) =>
    (idUser) => state.atividades.filter(atividade => atividade.idUser == idUser),

    //Pontos que a Atividade dá ao User
    getPontosAtividade: (state) =>
    (pontosAtividades) => state.atividades.filter(atividade => atividade.pontosAtividades == pontosAtividades),

    //Localização da Atividade
    getLocalizaçãoAtividade: (state) =>
    (localAtividade) => state.atividades.filter(atividade => atividade.localAtividade == localAtividade),

    
    //Status da Atividade (A decorrer ou passada)
    getStatusAtividade: (state) =>
    (statusAtivididade) => state.atividades.filter(atividade => atividade.statusAtivididade == statusAtivididade),
  },

  actions:{
    //Inscrição na Atividade
    inscriçãoUser(userID){
        this.atividades.idUser.push(userID)
    },

    //addAtividadeTeste1
    addAtividade(nomeAt,desAtv,imgAtv,dataHoraAtv,localAtv,pontosAtv){
        this.users.push({
            idUser: this.users[this.users.length - 1].id + 1,
            nomeAtividade: nomeAt,
            idUser: [],
            descAtividade: desAtv,
            imagemAtividade: imgAtv,
            dataHoraAtividade: dataHoraAtv,
            localAtividade: localAtv,
            coordenadorAtividade: [0, 1],
            pontosAtividades: Int(pontosAtv),
            statusAtivididade: false,
        })
        localStorage.setItem('users',JSON.stringify(this.users))
      },
  }
})

