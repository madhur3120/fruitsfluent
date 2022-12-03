const express = require("express")
const app = express()
const config = require("./config/config")
const database = require("./config/db")
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs")

const product = require("./models/productmodel")

const adminroute = require("./routes/adminroute")
const userroute = require("./routes/userroute")
const productroute = require("./routes/productroute")


app.listen(config.port,()=>{
    console.log("server connected at port : ",config.port);
})

database()


app.use(bodyParser.json());

app.use("/admin",adminroute);

app.use("/user",userroute)


app.use("/products/",productroute)