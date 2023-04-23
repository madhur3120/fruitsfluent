const dotenv = require("dotenv").config("../*.env")

const { PORT, DB_URI, JWT_KEY, EMAIL, CLOUD_NAME, API_KEY, API_SECRET_KEY } = process.env

module.exports = {
    port: PORT,
    db_uri: DB_URI,
    jwt_key: JWT_KEY,
    email: EMAIL,
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret_key: API_SECRET_KEY
}