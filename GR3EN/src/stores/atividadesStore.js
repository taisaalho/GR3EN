import { defineStore } from 'pinia'

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ATIVIDADES
let atividades
if (!JSON.parse(localStorage.getItem('atividades'))){
  atividades = [
    {
    idAtividade: 0,
    nomeAtividade:"Reunião Anual",
    idUser: [],
    descAtividade: "Reunão anual com membros do Eco-Escolas para celebrar a continuidade do projeto",
    imagemAtividade: "/src/assets/img/imagemAtividade.png",
    dataHoraAtividade:"05-05-2000", /* (newDate).toString().split(' '), */
    localAtividade: "Vila do Conde",
    coordenadorAtividade: "João Pais",
    pontosAtividades: 0,
    statusAtivididade: false,

    },
    {
    idAtividade: 1,
    nomeAtividade:"Reunião Anual 2",
    idUser: [],
    descAtividade: "Reunião anual com membros do Eco-Escolas para celebrar a continuidade do projeto 2",
    imagemAtividade: "/src/assets/img/imagemAtividade.png",
    dataHoraAtividade:"23-11-2023" /* (newDate).toString().split(' ') */,
    localAtividade: "Porto",
    coordenadorAtividade:"Taísa Alho",
    pontosAtividades: 0,
    statusAtivididade: false,

    },
]
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


    getAtividadeByID: (state) =>
    (idAtividade) => state.atividades.find(atividade => atividade.idAtividade == idAtividade),


  },

  actions:{
    //Inscrição na Atividade
    inscriçãoUser(userID){
        this.atividades.idUser.push(userID)
    },

    //addAtividadeTeste1
    addAtividade(nomeAt,desAtv,imgAtv,localAtv,pontosAtv,horaAtv){
        this.atividades.push({
            idUser: this.users[this.users.length - 1].idUser + 1,
            nomeAtividade: nomeAt,
            idUser: [],
            descAtividade: desAtv,
            imagemAtividade: imgAtv,
            dataHoraAtividade:horaAtv, /* (newDate).toString().split(' '), */
            localAtividade: localAtv,
            coordenadorAtividade: "",
            pontosAtividades: Int(pontosAtv),
            statusAtivididade: false,
        })
        localStorage.setItem('users',JSON.stringify(this.users))
      },
  }
})

