import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//USERS
let users 
if (!JSON.parse(localStorage.getItem('users'))){
  users = [{
    idUser: 0,
    primeiroNome: " ",
    ultimoNome: " ",
    escola: " ",
    email: " ",
    password: " ",
    idBadge: [],
    idTitulo: [],
    questionario: false,
    ranking: 0,
    idOcorrencia: [], 
    idAtividade: [],
    conselhoEco: false,
  }]
  localStorage.setItem('users', JSON.stringify(users))
}else{
  users = JSON.parse(localStorage.getItem('users'))
}

export const User = defineStore('user', {
  state: () => ({
    users: users
  }),
  
  getters: {
    //Get de toda a informação
    getUser: (state) => state.users, //Não deverá ser usar

    //Escola
    getEscola: (state) =>
    (escola) => state.users.find(user => user.escola == escola),  

    //Email
    getEmail: (state) =>
    (email) => state.users.find(user => user.email == email),  

    //Password
    getPassword: (state) =>
    (password) => state.users.find(user => user.password == password), 

    //Badges
    getBadges : (state) =>
    (badges) => state.users.find(user => user.idBadges == badges),

    //Títulos
    getTitulos : (state) =>
    (titulos) => state.users.find(user => user.idTitulo == titulos),
    
    //Ocorrencias
    getOcorrencias: (state) => 
    (ocorrencias) => state.users.find(user => user.idOcorrencia == ocorrencias),

    //Atividades
    getAtividades: (state) =>
    (atividades) => state.users.find(user => user.idAtividades == atividades)
    
  },
  actions: {
    //Nome Completo
    nomeUser(){
      nome = this.users.primeiroNome + " " + this.users.ultimoNome
    },

    //Adicionar User
    addUser(primeiroNome1,ultimoNome1,email1,escola1,password1){
      this.users.push({
        idUser: 0,
        primeiroNome: primeiroNome1,
        ultimoNome: ultimoNome1,
        escola: escola1,
        email: email1,
        password: password1,
        idBadge: [],
        idTitulo: [],
        questionario: false,
        ranking: undefined,
        idOcorrencia: [], 
        idAtividade: [],
        conselhoEco: false,
      })
      localStorage.setItem('users',JSON.stringify(this.users))
    }
  }
})


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
  }
})


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//OCORRÊNCIAS
let ocorrencias
if (!JSON.parse(localStorage.getItem('ocorrencias'))){
  ocorrencias: [{
    idOcorrencia: 0,
    nomeOcorrencia: " ",
    descriçaoOcorrencia: " ",
    localOcorrencia: " ",
    estado: " ",
    dataHoraOcorrencia: " ",
    idUser: 0,
    fotoOcorrencia: " ",
    pontosOcorrencias: 0,
    categoriaOcorrencia: " ",
    statusOcorrencia: false,
  }],
  localStorage.setItem('ocorrencias', JSON.stringify(ocorrencias))
}else{
  ocorrencias = JSON.parse(localStorage.getItem('ocorrencias'))
}

export const Ocorrencia = defineStore('ocorrencia',{
  state: () => ({
    ocorrencias: ocorrencias
  }),

  getters:{
    /* Ocorrências */ //Não completo
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


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//BADGES
let badges
if (!JSON.parse(localStorage.getItem('badges'))){
  badges:[{
    idBadge: 0,
    descBadge: " ",
    dataHoraBadge: " ",
    imagemBadge: " ",
    idUser: [],
    pontosBadge: 0,
  }]
  localStorage.setItem('badges', JSON.stringify(badges))
}else{
  badges = JSON.parse(localStorage.getItem('badges'))
}

export const Badge = defineStore('badge',{
  state: () => ({
    badges: badges
  }),

  getters: {

  }
})


//------------------------------------------------------------------------------------------------
//TÍTULOS
let titulos
if (!JSON.parse(localStorage.getItem('titulos'))){
  titulos:[{
    idTitulo: 0,
    descTitulo: " ",
    dataHoraTitulo: " ",
    imagemTitulo: " ",
    idUser: [],
    pontosTitulo: 0,
  }]
  localStorage.setItem('titulos', JSON.stringify(titulos))
}else{
  titulos = JSON.parse(localStorage.getItem('titulos'))
}

export const Titulo = defineStore("titulo", {
  state: () => [{
    titulos: titulos
  }],
})


//--------------------------------------------------------------------------------------------------------------------------------
//RANKING
let rank
if (!JSON.parse(localStorage.getItem('rank'))){
  rank:[{
    idUser: 0,
    pontosTotal: 0,
    ranking: 0,
    top3Rank: false,
  }]
  localStorage.setItem('rank', JSON.stringify(rank))
}else{
  rank = JSON.parse(localStorage.getItem('rank'))
}
export const Ranking = defineStore("ranking", {
  state: () => [{
    rank: rank
  }],
})