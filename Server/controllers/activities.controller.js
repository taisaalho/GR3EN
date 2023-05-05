const Activity = require('./../models/activitiy.model')
const isNumber = require('./Helpers/isNumber')

// Create a collection 
// Activity.createCollection().then((collection) => {console.log(collection)}).catch(err => {console.log(err)})

module.exports={
    getActivities:(req, res)=> {
        let {length=null, offset=null, activities = null} = req.query
        
        if(activities) {
            activities = activities.split(',')
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

            Activity.find().where('_id').in(activities)
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
        Activity.updateOne({_id: req.params.activityid}, req.body)
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
        Activity.deleteOne({_id: req.params.activityid})
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
        
        Activity.findById(req.params.activityid).then(result => {
            if( result.participantesAtividadeNaoExecutado.some(id => id == req.params.userid)
            ||  result.participantesAtividadeExecutado.some(id => id == req.params.userid)){
                res.status(400).send({error: 'user already exists'})
            }else{
                Activity.findOneAndUpdate({_id: req.params.activityid }, { $addToSet: {participantesAtividadeNaoExecutado : Number(req.params.userid)}})
                .then(result => {res.status(201).send(result)})
                .catch(err => {res.status(400).send(err.message)});
            }
        })

    },
    removeUserFromActivity: async (req,res) => {
        let changed = false 

         Activity.updateOne({_id: req.params.activityid }, { $pull: {participantesAtividadeExecutado : Number(req.params.userid)}})
        .then(result => {
            console.log(result)
            if(result.modifiedCount > 0){
                res.status(204).send()  
                
            }
        })
        .catch(err => {res.status(400).send(err.message)});
            
        
         Activity.updateOne({_id: req.params.activityid }, { $pull: {participantesAtividadeNaoExecutado : Number(req.params.userid)}})
        .then(result => {
            console.log(result)
            if(result.modifiedCount > 0){
                res.status(204).send()  
                
            }
        })
        .catch(err => {res.status(400).send(err.message)}); 

        

        res.status(400).json({error:'User does not exist'})
        
        
    }
    ,changeUserState: async (req,res) => {
        if(req.query.state == 'true'){
            await Activity.updateOne({_id: req.params.activityid},{ $pull: {participantesAtividadeNaoExecutado : Number(req.params.userid)}})
            .then(result => {
             
                if(result.modifiedCount > 0){
                    Activity.updateOne({_id: req.params.activityid},{ $addToSet: {participantesAtividadeExecutado : Number(req.params.userid)}})
                    .then(result => {}).catch(err => res.status(400).json(err))
                    res.status(201).json(result)
                }else{
                    res.status(400).json({error:'user does not exist'})
                }
            })
        }else if (req.query.state == 'false'){
            await Activity.updateOne({_id: req.params.activityid},{ $pull: {participantesAtividadeExecutado : Number(req.params.userid)}})
            .then(result => {
                console.log(result)
                if(result.modifiedCount > 0){
                    Activity.updateOne({_id: req.params.activityid},{ $addToSet: {participantesAtividadeNaoExecutado : Number(req.params.userid)}})
                    .then(result => {}).catch(err => res.status(400).json(err))
                    res.status(201).json(result)
                }else{
                    res.status(400).json({error:'user does not exist'})
                }
            })
        }else{
            res.status(400).send({error: 'Bad Query Use'})
        }
    }
}