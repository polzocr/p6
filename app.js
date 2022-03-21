const express = require('express');
const app = express();


app.use(express.json()); //on recupère le corps JSON des requête POST

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



app.use((req,res) => {
    res.json({message : "Requête bien reçue !"});
})

module.exports = app;