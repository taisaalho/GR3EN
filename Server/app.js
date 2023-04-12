// import Express
const express = require('express');
const app = express();
app.use(express.json())

// import configs
config = require('./config')



// Use Routes
app.use('/users',require('./routes/users.router'))
app.use('/activities',require('./routes/activities.router'))
app.use('/badges',require('./routes/badges.router'))
app.use('/occurrences',require('./routes/occurrences.router'))
app.use('/rankings',require('./routes/ranking.router'))
app.use('/titles',require('./routes/titles.router'))

//MONGO DB STUFF
const {connectToDb} = require('./mongo')



// server creation and listening for any incoming requests

app.listen(config.port, config.hostname, (error) => {
  
  console.log(`App listening at http://${config.hostname}:${config.port}/`)
  connectToDb()

      
      
})