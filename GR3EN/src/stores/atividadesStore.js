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
    descAtividade: "Reunião anual com membros do Eco-Escolas para celebrar a continuidade do projeto",
    imagemAtividade: "/src/assets/img/imagemAtividade.png",
    dataHoraAtividade:"01-01-2024", /* (newDate).toString().split(' '), */
    localAtividade: "Vila do Conde",
    coordenadorAtividade: "João Pais",
    pontosAtividades: 0,
    statusAtivididade: false,

    },
    {
    idAtividade: 1,
    nomeAtividade:"Apanhar Lixo na praia",
    idUser: [],
    descAtividade: "Apanhar lixo na praia para termos um mundo melhor",
    imagemAtividade: "/src/assets/img/imagemAtividade.png",
    dataHoraAtividade:"15-02-2023" /* (newDate).toString().split(' ') */,
    localAtividade: "Porto",
    coordenadorAtividade:"Taísa Alho",
    pontosAtividades: 0,
    statusAtivididade: false,

    },
    {
    idAtividade: 2,
    nomeAtividade:"Reunião com o Gaspar",
    idUser: [],
    descAtividade: "Reunião anual com membros do Eco-Escolas para celebrar a continuidade do projeto 2",
    imagemAtividade: "/src/assets/img/imagemAtividade.png",
    dataHoraAtividade:"27-01-2023" /* (newDate).toString().split(' ') */,
    localAtividade: "Porto",
    coordenadorAtividade:"Gaspar Vieira",
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
    inscricaoUser(userID,atividadeID){
      console.log(userID);
      console.log(atividadeID);
      let checkAtivity = this.atividades.find(atividade => atividade.idAtividade == atividadeID)
      console.log(checkAtivity)
      checkAtivity.idUser.push(userID)

      localStorage.setItem('atividades',JSON.stringify(this.atividades))
    },
    removerUser(userID,atividadeID){
      console.log(userID);
      console.log(atividadeID);

      let checkAtivity = this.atividades.find(atividade => atividade.idAtividade == atividadeID)
      console.log(checkAtivity)
      let checkRemove = checkAtivity.idUser.indexOf(user => user == userID)
      
      checkAtivity.idUser.splice(checkRemove,1)

      localStorage.setItem('atividades',JSON.stringify(this.atividades))
    },

    //addAtividadeTeste1
    addAtividade(nomeAt,desAtv,imgAtv,localAtv,pontosAtv,horaAtv){
        this.atividades.push({
            idAtividade: this.users[this.users.length - 1].idUser + 1,
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
        localStorage.setItem('atividades',JSON.stringify(this.atividades))
      },
  }
})