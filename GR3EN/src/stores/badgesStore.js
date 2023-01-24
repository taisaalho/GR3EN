import { defineStore } from 'pinia'

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
