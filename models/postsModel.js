const mongoose = require("mongoose")//Appel de Mongoose
const PostsModel = mongoose.model(
    "node-api",{
         country:{
             type: String,
             require: true
        },
        nameOf:{
            type:String,
            require:true
        },
        date:{
            type:Date,
           default: Date.now
        },
        region:{
            type:String,
            require:true
        },
        nameOfCapital:{
            type:String,
            require:true
        },
       
    },
    "posts"

);

module.exports = { PostsModel  };