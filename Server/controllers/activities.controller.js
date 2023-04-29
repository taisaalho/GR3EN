const Activity = require('./../models/activitiy.model')
const isNumber = require('./Helpers/isNumber')

// Create a collection 
// Activity.createCollection().then((collection) => {console.log(collection)}).catch(err => {console.log(err)})

module.exports={
    getActivities:(req, res)=> {
        
        let {length=null, offset=null, activities = null} = req.query
        
        if(activities) {

            activities = activities.split(',')
            activities.forEach(atctivity =>{ 
                isNumber(atctivity,(result) => {
                    if(!result){
                        res.status(400).send({error: "Only numbers are allowed in activities query (Example: '1,2,3,4,5,6'"})
                    }
                })
                })
        }
        if(length && offset){
            
            if(isNumber(length, (result) => {return result}) || isNumber(offset, (result) => {return result})){
                res.status(400).send({error: "Only numbers are allowed in offset and length queries"})
                return
            }
        
            Activity.find().skip(offset).limit(length).then(activities => { res.status(206).json(activities)}).catch(err => { res.status(400).send({err: err.message})})
         
        }else if(length || offset){

            res.status(400).json({error: "Incorrect query use (you must use offset and length at the same time)"})
        
        }else if(activities){

            Activity.find().where('idAtividade').in(activities)
            .then((activities) => { res.status(206).json(activities) })
            .catch(err => res.status(400).send({error: err.message}))

        }else{

            Activity.find().then((activities)=>{
                res.status(200).json(activities)
            })

        }
    },
    createActivity: (req,res) => {
        Activity.create(req.body)   
        .then((activity) => { res.status(201).send(activity)})
        .catch((err) => {res.status(400).send({error: err.message})})
    },
    editActivity: (req,res) => {
        Activity.updateOne({idAtividade: req.params.activityid}, req.body)
        .then(activity => { 
            if(modifiedCount > 0){
                res.status(201).send(activity)}
            else{
                res.status(404).send({error: 'Activity not found (Wrong Id)'})
                }
                })
        .catch(err => { res.status(400).send({err: err.message})})
    },
    deleteActivity: (req,res) => {
        Activity.deleteOne({idAtividade: req.params.activityid})
        .then(activity => { 
            if(activity.deletedCount){
                res.status(204).send({msg: 'deletion successuful'})
            }else{
                res.status(404).send({msg: 'Deletion not succesuful (Wrong ID)'})
            }

        })
        .catch(err => { res.status(400).send({err: err.message})})
    },
    addUserToActivity: (req,res) => {
        Activity.findOneAndUpdate({idAtividade: req.params.activityid }, { $addToSet: {participantesAtividadeNaoExecutado : Number(req.params.userid)}})
        .then(result => {res.status(201).send(result)})
        .catch(err => {res.status(400).send(err.message)});
    },
    removeUserFromActivity: (req,res) => {

        Activity.updateOne({idAtividade: req.params.activityid }, { $pull: {participantesAtividadeExecutado : Number(req.params.userid)}})
        .then(result => {
            if(result.modifiedCount > 0){
                res.status(204).send(result)
            }else{
                Activity.updateOne({idAtividade: req.params.activityid }, { $pull: {participantesAtividadeNaoExecutado : Number(req.params.userid)}})
                .then(result => {res.status(204).send(result)})
                .catch(err => {res.status(400).send(err.message)}); 
            }
        
        })
        .catch(err => {res.status(400).send(err.message)});
    }
    ,changeUserState: async (req,res) => {
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