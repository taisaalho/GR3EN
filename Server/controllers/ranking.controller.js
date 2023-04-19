const Ranking = require("./../models/ranking.model")
const User = require("./../models/user.model")

module.exports={
    createRanking: async (req,res) => {
        
         

       
        let topUsers = await User.find()
        .sort({ pontos: -1 }).limit(10).lean()
        .then()
        .catch(err => {});
        const rankingData = topUsers.map(topUsers => ({id: topUsers.id, pontos:topUsers.pontos }))
        
        
        
        
        let LastYearRanking = await Ranking.findOne().sort({createdAt: -1}).limit(1).lean().then().catch(err => {})
        
        if(LastYearRanking){
            
            let NewRanking = Ranking.create(
                {
                    year:[Number(LastYearRanking.year[0])+1,Number(LastYearRanking.year[1])+1],
                    users:rankingData
                })
            User.updateMany({},{$set: {pontos: 0}}).then().catch(err => {
                
            })
        }else{
            let NewRanking = await Ranking.create(
                {
                    year:[Number(new Date(Date.now()).getFullYear()),Number(new Date(Date.now()).getFullYear())+1],
                    users:rankingData
                })
            User.updateMany({},{$set: {pontos: 0}})
        }
     


        res.status(201).send(NewRanking)
        
    },
    getRankings: (req,res) => {
        
    }
    
}