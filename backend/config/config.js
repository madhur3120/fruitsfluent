const dotenv = require("dotenv").config("../*.env")

const {PORT , DB_URI , JWT_KEY , EMAIL}  = process.env

module.exports = {
    port : PORT , 
    db_uri : DB_URI,
    jwt_key : JWT_KEY,
    email : EMAIL
}