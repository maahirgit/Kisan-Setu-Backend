const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productcatSchema = new Schema ({
    Name : {
        type : String
    },
    Description : {
        type : String
    }
})

module.exports = mongoose.model("Productcat",productcatSchema)