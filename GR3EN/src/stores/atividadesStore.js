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
    dataHoraAtividade:"01-04-2023", /* (newDate).toString().split(' '), */
    localAtividade: "Vila do Conde",
    coordenadorAtividade: "João Pais",
    pontosAtividades: 20,
    statusAtividade: true,

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
    pontosAtividades: 15,
    statusAtividade: true,

    },
    {
    idAtividade: 2,
    nomeAtividade:"Reunião com o Gaspar",
    idUser: [],
    descAtividade: "Reunião anual com membros do Eco-Escolas para celebrar a continuidade do projeto 2",
    imagemAtividade: "/src/assets/img/imagemAtividade.png",
    dataHoraAtividade:"27-05-2023" /* (newDate).toString().split(' ') */,
    localAtividade: "Porto",
    coordenadorAtividade:"Gaspar Vieira",
    pontosAtividades: 5,
    statusAtividade: true,

    },
    {
    idAtividade: 3,
    nomeAtividade:"Teste de atividade passada",
    idUser: [2],
    descAtividade: "Teste teste",
    imagemAtividade: "/src/assets/img/imagemAtividade.png",
    dataHoraAtividade:"27-02-2023" /* (newDate).toString().split(' ') */,
    localAtividade: "Porto",
    coordenadorAtividade:"Me",
    pontosAtividades: 10,
    statusAtividade: false,
  
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
    (statusAtividade) => state.atividades.filter(atividade => atividade.statusAtividade == statusAtividade),

    //Id da Atividade
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
    addAtividade(nomeAt,desAtv,imgAtv,localAtv,pontosAtv,horaAtv,coordAtv){
        this.atividades.push({
            idAtividade: this.atividades[this.atividades.length - 1].idAtividade + 1,
            nomeAtividade: nomeAt,
            idUser: [],
            descAtividade: desAtv,
            imagemAtividade: imgAtv,
            dataHoraAtividade:horaAtv, /* (newDate).toString().split(' '), */
            localAtividade: localAtv,
            coordenadorAtividade: coordAtv,
            pontosAtividades: pontosAtv,
            statusAtividade: true,
        })
        localStorage.setItem('atividades',JSON.stringify(this.atividades))
    },

    removeAtividade(removerNomeAtv){
      let atividadeIndex = this.atividades.findIndex(atividade => atividade.nomeAtividade == removerNomeAtv.nomeAtividade)
      this.atividades.splice(atividadeIndex,1)
      localStorage.setItem('atividades',JSON.stringify(this.atividades))
    }
  }, 

  computed:{
    AtividadesDisponiveis () {
      return this.atividades.filter(atividade => atividade.statusAtividade == true)
    }
  }
})

