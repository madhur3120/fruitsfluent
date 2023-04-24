const express = require("express")
const app = express()
const config = require("./config/config")
const database = require("./config/db")
const path = require('path')
const bodyParser = require('body-parser');
let urlencodedparser = bodyParser.urlencoded({ extended: false })
const cookieparser = require('cookie-parser')
const bcrypt = require("bcryptjs")
const fs = require('fs')
const cors = require('cors')

const product = require("./models/productmodel")

const adminroute = require("./routes/adminroute")
const userroute = require("./routes/userroute")
const productroute = require("./routes/productroute")

app.use(express.static("public"));
app.listen(config.port, () => {
    console.log("server connected at port : ", config.port);
})

database()

app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

    next();
}); //cors error


// const multer = require('multer')
// const storage  = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,'Images')
//     },
//     filename : (req,file,cb) =>{
//         console.log(file);
//         cb(null,("first" + file.originalname))
//     }
// })
// const upload = multer({ storage: storage })


// const helmet = require("helmet");
const morgan = require("morgan");

// Swagger dependencies
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

//protect against cross-site scripting (XSS) attacks
// app.use(
//     helmet.contentSecurityPolicy({
//         directives: {
//             defaultSrc: ["'self'"],
//             scriptSrc: ["'self'", "'unsafe-inline'"],
//             styleSrc: ["'self'", "'unsafe-inline'"],
//             imgSrc: ["'self'", "data:"],
//         },
//     })
// );

// Define Swagger options
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecommerce API",
            version: "1.0.0",
            description: "API documentation for the Ecommerce store",
        },
    },
    apis: ["./routes/*.js"],
};

// Create Swagger specification
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.use(helmet());

app.use(morgan("dev"));

const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
    flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));


app.use(bodyParser.json());

app.use("/admin", adminroute);

app.use("/user", userroute)

app.use("/products/", productroute)

module.exports=app