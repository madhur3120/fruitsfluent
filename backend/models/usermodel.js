const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const config = require("../config/config")
const bcrypt = require('bcryptjs')

const userschema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String, unique: true
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    totalorders: {
        type: String
    }
})

userschema.index({ email: 1 });

userschema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model("users", userschema)