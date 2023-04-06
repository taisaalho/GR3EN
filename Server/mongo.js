
const config = require('./config');
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

let dbConnection 



module.exports = {
  connectToDb : async () => {
    try {
      await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'Green' } )
      console.log('Connected to database:', mongoose.connection.db.databaseName);
     
    } catch (error) {
      console.log(error)
    }
    
}
}
