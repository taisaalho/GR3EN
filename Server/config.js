const config = {
        
    //DB URL

    //tiagogabrielpereira
    //password JmwFU84ZIs8AWgaS
    databaseURL: "mongodb+srv://tiagogabrielpereira:JmwFU84ZIs8AWgaS@cluster0.csg1iiw.mongodb.net/?retryWrites=true&w=majority",

    //LOCALHOST 
    hostname : '127.0.0.1',
    
    //PORTA  
    port : process.env.PORT || 3000,

    dbName: 'GREEN',

    //JWT stuff 
    //SECRET
    jwtSecret:'UmSegredinho',
    //Max Age for the token in seconds
    jwtMaxAge:60 * 60 * 24 * 7 // Sete dias

}   

module.exports = config
