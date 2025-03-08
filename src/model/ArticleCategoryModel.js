const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articlecatSchema = new Schema({
    Name : {
        type : String
    },
    Description : {
        type : String
    }
}) 

module.exports = mongoose.model('Articlecat',articlecatSchema)