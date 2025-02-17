const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    Fname : {
        type : String
    },
    Lname : {
        type : String
    },
    Email : {
        type : String
    },
    Password : {
        type : String
    }
})

module.exports = mongoose.model("User",userSchema)
