import { defineStore } from 'pinia'


//--------------------------------------------------------------------------------------------------------------------------------
//RANKING
let rank
if (!JSON.parse(localStorage.getItem('rank'))){
  rank:[{
    idUser: 0,
    pontosTotal: 0,
    ranking: 0,
    top3Rank: false,
    quadroHonra: [],
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