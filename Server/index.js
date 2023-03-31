// import Express
const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;


//Use Routes
app.use('/activities',)
app.use('/users',)
app.use('/badges',)
app.use('/occurrences',)
app.use('/ranking',)
app.use('/titles',)


// server creation and listening for any incoming requests
app.listen(port, hostname, (error) => {
console.log(`App listening at http://${hostname}:${port}/`)
})