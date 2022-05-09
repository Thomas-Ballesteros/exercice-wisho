//connection a la base de donnée
const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://localhost:27017/node-api",
    { useNewUrlParser: true},
    (err) => {
        if(!err) console.log("Mongodb connected");
        else console.log("Connection error:"+ err);
    }

)