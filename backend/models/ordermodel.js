const mongoose = require("mongoose")

const orderschema = new mongoose.Schema({
    username : {
        type : String
    },
    email : {
        type : String
    },
    products : {
        type : String
    },
    ordertotal : {
        type : String        
    }
})

module.exports = mongoose.model("orders",orderschema)