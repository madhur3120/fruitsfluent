const mongoose = require("mongoose")

const config = require("./config")

const connectdatabase = async() => {
  await mongoose
    .connect(config.db_uri)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectdatabase;