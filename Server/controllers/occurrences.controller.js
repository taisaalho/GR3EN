const Occurrence = require('./../models/occurrence.model')


module.exports={

    getOccurrences: (req,res) =>{
        let {length=null, offset=null, occurrences = null} = req.query

        if(occurrences)
        occurrences = occurrences.split(',')

        if(length && offset){
            Occurrence.find().skip(offset).limit(10).then(occurrences => {res.status(206).json(occurrences)}).catch(err => {res.status(400).send({err:err.message})})
        
        }else if(occurrences){
            Occurrence.find().where('idOcorrencia').in(occurrences)
            .then((occurrences) => {res.status(206).json(occurrences)})
            .catch(err => {res.status(400).send({err:err.message})})
        }
        
    },
    
    addOccurrence:(req,res) => {
        Occurrence.create(req.body)
        .then((occurrences) => {res.status(201).send(occurrences)})
        .catch((err) =>{res.status(500).send({err:err.message})})
    },

    editOccurrence: (req,res) => {
        Occurrence.findOneAndUpdate({idOcorrencia: res.params.occorrenceid}, req.params)
        .then((occurrence) => {res.status(201).send(occurrence)})
        .catch((err) =>{res.status(500).send({err:err.message})})
    },

    deleteOccurrence: (req,res) =>{
        Occurrence.deleteOne({idOcorrencia: req.params.occorrenceid})
        .then( () => {res.status(204).send({msg:"Successful Delete"})})
        .catch(err => {res.status(500).send({err:err.mesage})})
    }
}