const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: { type: String },
    password: { type: String },
    plan: { type: String, default: "free" },
    token: { type: String, default: "" }
})

const User = mongoose.model('user', userSchema)

module.exports = User