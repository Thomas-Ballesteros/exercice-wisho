const mongoose = require("mongoose")//Appel de Mongoose
const PostsModel = mongoose.model(
    "node-api",{
         country:{
             type: String,
             require: true
        }
    },
    "posts"

)