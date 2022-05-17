const express = require ('express'); // Nommé le framwork 'express'
const app = express();// appel du framwork express
require('./models/dbConfig');
//appel de la route
const postsRoutes = require('./routes/postsController');
app.use('/', postsRoutes);
//conection au serveur
app.listen(5500,() => console.log('serveur started: 5500'));
