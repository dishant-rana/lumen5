const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    src: {type: String},
    type: {type: String}
})

const Resources = mongoose.model('resources', videoSchema)

module.exports = Resources;