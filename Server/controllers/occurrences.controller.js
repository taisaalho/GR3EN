const Occurrence = require('./../models/occurrence.model')
const isNumber = require('./Helpers/isNumber')


module.exports={

    getOccurrences: (req,res) =>{
        let {length=null, offset=null, occurrences = null} = req.query
        
        if(occurrences)
            occurrences = occurrences.split(',')
            occurrences.array.forEach(occurrence => {
                isNumber(occurrence,(result) =>{
                    if(!result)
                        res.status(400).send({error:"Only numbers are allowed in occurrence query"})
                })
                
            });
        if (length && offset){
            if(isNumber(length, (result)=>{return result}) || isNumber(offset, (result) => {return result}))    
                res.status(400).send({error:"Only numbers are allowed in offset and length queries"})
                return
            Occurrence.find().skip(offset).limit(length).then(occurrences => {res.status(206).json(occurrences)}).catch(err => {res.status(400).send({err: err.message})})
        }else if(length || offset){
            res.status(400).json({error:"Incorrect query use (you must use offset and length at the same time)"})
        }else if (occurrences){
            Occurrence.find().where('occurrenceid').in(occurrences)
            .then((occurrences) => {res.status(206).json(occurrences)})
            .catch(err => res.status(400).send({error:message}))
        }else{
            Occurrence.find().then((occurrences)=>{
                res.status(200).json(occurrences)
            })
        }

            
    
    },
    
    addOccurrence:(req,res) => {
        Occurrence.create(req.body)
        .then((occurrences) => {res.status(201).send(occurrences)})
        .catch((err) =>{res.status(500).send({err:err.message})})
    },

    editOccurrence: (req,res) => {
        Occurrence.findOneAndUpdate({idOcorrencia: res.params.occurrenceid}, req.body)
        .then((occurrence) => {
        if (occurrence.modifiedCount > 0){
            res.status(201).send(occurrence)}
        else{
            res.status(404).send({error:'Occurrence not found'})

        }})   
        .catch(err => {res.status(400).send({err: err.message})})
    },

    deleteOccurrence: (req,res) =>{
        Occurrence.deleteOne({idOcorrencia: req.params.occurrenceid})
        .then((occurrence) => {
            if(occurrence.deletedCount){
                res.status(204).send({msg:"Successful Delete"})
            }else{
                res.status(204).send({msg:"Successful Delete"})
            }
        }
        )
        .catch(err => {res.status(400).send({err:err.mesage})})
    }
}