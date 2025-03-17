const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    Title : {
        type : String
    },
    Content : {
        type : String
    },
    Category_id : {
        type : Schema.Types.ObjectId,
        ref : 'Articlecat'
    },
    Published_date : {
        type : Date
    },
     Image_url : {
        type : String
    }, 
    Status : {
        type : Boolean
    }
})

module.exports = mongoose.model("Article",articleSchema)
