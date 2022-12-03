const mongoose = require("mongoose")

const productschema = new mongoose.Schema({
    productname : {
        type : String
    },
    productprice : {
        type : String        
    },
    stock : {
        type : String
    },
    brand : {
        type : String
    },
    imgsrc : {
        type : String
    }
})

module.exports = mongoose.model("products",productschema)