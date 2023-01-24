import { defineStore } from 'pinia'

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//BADGES
let badges
if (!JSON.parse(localStorage.getItem('badges'))){
  badges:[{
    idBadge: 0,
    nomeBadge: " ",
    descBadge: " ",
    dataHoraBadge: (newDate).toString().split(' '),
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
