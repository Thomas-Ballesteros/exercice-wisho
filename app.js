const express = require ('express'); // Nommé le framwork 'express'
const app = express();// appel du framwork express
require('./models/dbConfig');
//conection au serveur
app.listen(5500,() => console.log('serveur started: 5500'));
