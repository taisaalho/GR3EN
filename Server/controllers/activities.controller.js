const Activity = require('./../models/activitiy.model')


// Create a collection 
// Activity.createCollection().then((collection) => {console.log(collection)}).catch(err => {console.log(err)})

module.exports={
    getActivities:(req, res)=> {
        let {length=null, offset=null, activities = null} = req.query
        
        if(activities)  
            activities = activities.split(',')
        
        if(length && offset){
    
            Activity.find().skip(offset).limit(length).then(activities => { res.status(206).json(activities)}).catch(err => { res.status(400).send({err: err.message})})
         
        }else if(activities){
            Activity.find().where('idAtividade').in(activities)
            .then((activities) => { res.status(206).json(activities) })
            .catch(err => res.status(400).send({error: err.message}))
        }   
    },
    createActivity: (req,res) => {
        Activity.create(req.body)   
        .then((activity) => { res.status(201).send(activity)})
        .catch((err) => {res.status(500).send({error: err.message})})
    },
    editActivity: (req,res) => {
        Activity.findOneAndUpdate({idAtividade: req.params.activityid}, req.body)
        .then(activity => { res.status(201).send(activity)})
        .catch(err => { res.status(500).send({err: err.message})})
    },
    deleteActivity: (req,res) => {
        Activity.deleteOne({idAtividade: req.params.activityid})
        .then( () => { res.status(204).send({msg: 'deletion successuful'})})
        .catch(err => { res.status(500).send({err: err.message})})
    },
    addUserToActivity: (req,res) => {
        Activity.findOneAndUpdate({idAtividade: req.params.activityid }, { $addToSet: {participantesAtividadeNaoExecutado : Number(req.params.userid)}})
        .then(result => {res.status(201).send(result)})
        .catch(err => {res.status(400).send(err.message)});
    },
    removeUserFromActivity: (req,res) => {
        Activity.findOneAndUpdate({idAtividade: req.params.activityid }, { $pull: {participantesAtividadeNaoExecutado : Number(req.params.userid)}})
        .then(result => {res.status(204).send(result)})
        .catch(err => {res.status(400).send(err.message)});

        Activity.findOneAndUpdate({idAtividade: req.params.activityid }, { $pull: {participantesAtividadeExecutado : Number(req.params.userid)}})
        .then(result => {res.status(204).send(result)})
        .catch(err => {res.status(400).send(err.message)});
    },changeUserState: async (req,res) => {

        
        if(req.query.state == 'true'){
            await Activity.updateOne({idAtividade: req.params.activityid},{ $pull: {participantesAtividadeNaoExecutado : Number(req.params.userid)}})
            .then(result => {
             
                if(result.modifiedCount > 0){
                    Activity.updateOne({idAtividade: req.params.activityid},{ $addToSet: {participantesAtividadeExecutado : Number(req.params.userid)}})
                    .then(result => {}).catch(err => res.status(400).json(err))
                    res.status(201).json(result)
                }else{
                    res.status(400).json({error:'user does not exist', result:result})
                }
            })
        }else if (req.query.state == 'false'){
            await Activity.updateOne({idAtividade: req.params.activityid},{ $pull: {participantesAtividadeExecutado : Number(req.params.userid)}})
            .then(result => {
                console.log(result)
                if(result.modifiedCount > 0){
                    Activity.updateOne({idAtividade: req.params.activityid},{ $addToSet: {participantesAtividadeNaoExecutado : Number(req.params.userid)}})
                    .then(result => {}).catch(err => res.status(400).json(err))
                    res.status(201).json(result)
                }else{
                    res.status(400).json({error:'user does not exist', result:result})
                }
            })
        }else{
            res.status(400).send({error: 'Bad Query Use'})
        }
    }
}