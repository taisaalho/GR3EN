import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//USERS
let users 
if (!JSON.parse(localStorage.getItem('users'))){
  users = [{
    idUser: 0,
    primeiroNome: "Taísa",
    ultimoNome: "Alho",
    escola: "ESMAD",
    email: "taisaalho@gmail.com",
    password: "123",
    idBadge: [],
    idTitulo: [],
    questionario: false,
    ranking: 1500,
    idOcorrencia: [], 
    idAtividade: [],
    conselhoEco: false,
  },
  {
    idUser: 1,
    primeiroNome: "João",
    ultimoNome: "Pais",
    escola: "ESHT",
    email: "joao@gmail.com",
    password: "123",
    idBadge: [],
    idTitulo: [],
    questionario: false,
    ranking: 2000,
    idOcorrencia: [], 
    idAtividade: [],
    conselhoEco: false,
  },
  {
    idUser:2,
    primeiroNome: "Gustavo",
    ultimoNome: "Silva",
    escola: "ESMAD",
    email: "gustavo@gmail.com",
    password: "123",
    idBadge: [],
    idTitulo: [],
    questionario: false,
    ranking: 1000,
    idOcorrencia: [], 
    idAtividade: [],
    conselhoEco: true,
  },
  {
    idUser:3,
    primeiroNome: "Bernardo",
    ultimoNome: "Macedo",
    escola: "ESMAD",
    email: "bernardo@gmail.com",
    password: "123",
    idBadge: [],
    idTitulo: [],
    questionario: false,
    ranking: 0,
    idOcorrencia: [], 
    idAtividade: [],
    conselhoEco: true,
  },
  ]
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
    getUsers: (state) => state.users, //Não deverá ser usar

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
    (atividades) => state.users.find(user => user.idAtividades == atividades),
    
    //ID
    getID: (state) =>
    (email) =>{let emailChecked = state.users.find(user => user.email ==email)
    return emailChecked.idUser
    },

    // BY ID
    getByID : (state) => (idUser) => state.users.find(user => user.idUser == idUser)
  },
  actions: {
    //Nome Completo
    nomeUser(){
      nome = this.users.primeiroNome + " " + this.users.ultimoNome
    },

    //Adicionar User
    addUser(primeiroNome1,ultimoNome1,email1,escola1,password1){
      this.users.push({
        idUser: this.users[this.users.length - 1].idUser + 1,
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
    },

    //Modificação do Email
    newEmail(newEmail){
      this.users.push({
        email: newEmail
      })
    },

    //Modifificação da Escola
    newEscola(newEscola){
      this.users.push({
        escola: newEscola
      })
    },

    //Modificação da Password
    newPassword(newPassword){
      this.users.push({
        password : newPassword
      })
    },

    inscricaoEcoEscolas(){
      this.users.push({
        conselhoEco : true
      })
    },

  }
})








