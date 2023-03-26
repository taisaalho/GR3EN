import { defineStore } from 'pinia'

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//BADGES
let badges
if (!JSON.parse(localStorage.getItem('badges'))){
  badges=[
    {
    idBadge: 0,
    nomeBadge: "Iniciante",
    descBadge: "Reporta 5 ocorrências",
    imagemBadge: "../src/assets/img/Award 1.svg",
    idUser: [],
    pontosBadge: 200
  },
    {
    idBadge: 1,
    nomeBadge: "Veterano",
    descBadge: "Ganha 1000 pontos",
    imagemBadge: "../src/assets/img/Award 2.svg",
    idUser: [],
    pontosBadge: 1500
  },
    {
    idBadge: 2,
    nomeBadge: "Master",
    descBadge: "Inscreve-te em 5 atividades",
    imagemBadge: "../src/assets/img/Award 3.svg",
    idUser: [],
    pontosBadge: 250
  },
    {
    idBadge: 3,
    nomeBadge: "Nova Folha",
    descBadge: "Inscreve-te numa atividade",
    imagemBadge: "../src/assets/img/Award 4.svg",
    idUser: [],
    pontosBadge: 100
  }
]
  localStorage.setItem('badges', JSON.stringify(badges))
}else{
  badges = JSON.parse(localStorage.getItem('badges'))
}

export const Badge = defineStore('badge',{
  state: () => ({
    badges: badges
  }),

  getters: {
    getByID : (state) => (idBadge) => state.badges.find(badge => badge.idBadge === idBadge),
    
    getBadges : (state) => state.badges,
  },

  actions:{
    addBadge(nome,desc,image,user){
        this.badges.push({
            idBadge: 0,
            nomeBadge: nome,
            descBadge: desc,
            dataHoraBadge: (newDate).toString().split(' '),
            imagemBadge: image,
            idUser: user,
            pontosBadge: 10,
        })
    }
  }
})
