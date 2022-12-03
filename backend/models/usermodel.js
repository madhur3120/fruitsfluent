const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const config = require("../config/config")

const userschema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String        
    },
    password : {
        type : String
    },
    token : {
        type: String
    }
})

// userschema.methods.gettoken = async function() {
//     this.token = jwt.sign({id:this._id},config.jwt_key,{
//         expiresIn: 300000
//     })
// }

module.exports = mongoose.model("users",userschema)