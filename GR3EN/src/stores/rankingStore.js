import { defineStore } from 'pinia'
import { User } from './userStore'


//--------------------------------------------------------------------------------------------------------------------------------
//RANKING
let rank
if (!JSON.parse(localStorage.getItem('rank'))){
  rank = [
    {
      year: 2022,
      users:[
        {
        idUser:0,
        ranking:3000
        },
        {
        idUser:3,
        ranking:2000
        },
        {
        idUser:2,
        ranking:1600
        },
        {
        idUser:1,
        ranking:1500
        },
      ]
      
    },
  ]
  localStorage.setItem('rank', JSON.stringify(rank))
}else{
  rank = JSON.parse(localStorage.getItem('rank'))
}

export const Ranking = defineStore("ranking", {
  state: () => ({
    rank: rank,
  }),
  getters: {
    //Get Top Ranked Players de certo ano
    getTopRankedPlayersByYear : (state) => (year) => state.rank.find(Top => Top.year == year),

    //Get Top Ranked Players de todos os anos
    getTopRankedPlayersAllYears : (state) => state.rank.reverse(),
  },
  actions: {
    CreateNewTopRankedPlayers(){
      const userStore = User()

      this.rank.push({ 
        year: new Date().getFullYear(),
        users: userStore.getTop10Present.map(user => ({idUser: user.idUser, ranking: user.ranking}))
      })

      localStorage.setItem('rank', JSON.stringify(rank))
    }
  }
})