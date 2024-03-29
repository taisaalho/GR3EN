import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import cors from 'cors'


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//USERS
/* let offset = 0

let length = 10 */

/* let users = await axios.get('https://elegant-slug-woolens.cyclic.app/users').data */

export const User = defineStore('user', {
  state: () => ({
    /* users: [] */
  }),
  
  getters: {
    /* //Get de toda a informação
    getUsers: (state) => state.users, //Não deverá ser usar

    //Get top 10 users no presente
    getTop10Present: (state) => state.users.sort((a,b) => { 
      if(a.ranking > b.ranking){
        return -1
      }
      else{
        return 1
      }}).slice(0,10),
  

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
    getByID : (state) => (idUser) => state.users.find(user => user.idUser == idUser) */
  },
  actions: {
    /* //Nome Completo
    nomeUser(){
      nome = this.users.primeiroNome + " " + this.users.ultimoNome
    },
    ChangeUserPassword(id,password){
      let currentUser =this.users.find(user => user.idUser == id)  
      currentUser.password=password
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
      localStorage.setItem('users', JSON.stringify(this.users))
      
    },
    ChangeUserEmail(id,email){
      let currentUser2 = this.users.find(user => user.idUser == id)
      currentUser2.email = email
      localStorage.setItem('currentUser', JSON.stringify(currentUser2))
      localStorage.setItem('users', JSON.stringify(this.users))
    },
    attBadges(id,idbadge){
      let currentUser = this.users.find(user => user.idUser == id)
      let badges= currentUser.idBadge
      badges.push(idbadge)
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
      localStorage.setItem('users', JSON.stringify(this.users))
      
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
        ranking: 0,
        idOcorrencia: [], 
        idAtividade: [],
        conselhoEco: false,
      })
      localStorage.setItem('users',JSON.stringify(this.users))
    },
    inscricaoEcoEscolas(userId){
      this.users.find(user => user.idUser === userId).conselhoEco = true
      
      localStorage.setItem('users',JSON.stringify(this.users))
      
      localStorage.setItem('currentUser',JSON.stringify(this.users.find(user => user.idUser === userId)))
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
    resetScores(){
      this.users.forEach(user => user.ranking = 0)
    }, */
    
    
    //BACKEND

    //USERS
    async Users(){
      try {
        const response = await axios.get('https://elegant-slug-woolens.cyclic.app/users');
        if (response.ok) {
          this.responseData = response.data
          this.users = result.message
        }
        else
          alert("HTTP error: " + response.status)
      }catch{
        alert("Couldn't get all Users." + error.response.data.error)
      }
    }, 
    
    //YES
    async register(primeiroNome,ultimoNome,email,escola,password){
      console.log("bom dia")
      let data = {
        
        primeiroNome : primeiroNome,
        ultimoNome : ultimoNome,
        email : email,
        escola : escola,
        password : password,
        idBadge: [],
        idTitulo: [],
        conselhoEco: false,
        verifierEco: false,
        pontos: 0
      }

      const headers = {
        'Content-Type': 'application/json'
      }
      
      try{
        const response = await axios.post('https://elegant-slug-woolens.cyclic.app/users',data,headers);
        if (response.status == 201){
          this.responseData = response.data
          localStorage.setItem("Token", response.data.Token)
          return true
        }
      }catch(error){
        alert('Register failed: ' + error.response.data.error)
        return false
      }

      
    },
    
    //YES
    async login(email, password){
      
      let data = {
        email:email,
        password:password
      }
      // console.log(data)
      const headers = {
        'Content-Type': 'application/json'
      }
      
      try{
        
        const response = await axios.post('https://elegant-slug-woolens.cyclic.app//users/login', data, {headers:headers})
        
        if(response.status == 200){
          this.responseData = response.data
          localStorage.setItem("Token",response.data.Token)
          localStorage.setItem("Id",response.data.id)
          console.log("STORE login ended OK"); 
          return true
        }
      }catch(error){
        //alert('Login failed: ' + error.response.data.error)
        return false
      }
    },
    
    async inscricaoEcoEscolas(currentUser){
      /* this.Users().find(user => user.id === currentUser) */
      console(this.Users().find(user => user._id === currentUser))


      console.log(this.users) 
      let data = {
        conselhoEco: true
      }

      let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token')
      }

      try{
        const response = await axios.put('https:/elegant-slug-woolens.cyclic.app/users/user-profile',data, headers)

        console.log(currentUser.conselhoEco)

        if (currentUser.conselhoEco == false){
          this.currentUser.conselhoEco = true
          this.responseData = response.data
          return true
        }
      }catch{
        alert('You already are apart of the Council!')
        return false
      }
    },

  }
})








