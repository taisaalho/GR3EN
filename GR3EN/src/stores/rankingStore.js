import { defineStore } from 'pinia'
import { User } from './userStore'


//--------------------------------------------------------------------------------------------------------------------------------
//RANKING
let rank
if (!JSON.parse(localStorage.getItem('rank'))){
  rank = [
    {
      year: [2021,2022],
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


let CurrentYear
if(!JSON.parse(localStorage.getItem('CurrentYear'))){
    CurrentYear = [2022,2023]
}else{
  CurrentYear = JSON.parse(localStorage.getItem('CurrentYear'))
}


export const Ranking = defineStore("ranking", {
  state: () => ({
    rank: rank,
    CurrentYear:CurrentYear
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
      const NewYear = this.CurrentYear.map( el => el)

      this.rank.push({ 
        year: NewYear,
        users: userStore.getTop10Present.map(user => ({idUser: user.idUser, ranking: user.ranking}))
      })
      
      userStore.resetScores()
      this.CurrentYear[0]++
      this.CurrentYear[1]++
      
      localStorage.setItem('CurrentYear', JSON.stringify(CurrentYear))
      localStorage.setItem('rank', JSON.stringify(rank))
      
      
    }
  }
})