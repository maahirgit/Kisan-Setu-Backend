const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productScehma = new Schema({
    User_id : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    Product_name : {
        type : String
    },
    Description : {
        type : String
    },
    Category_id : {
        type : Schema.Types.ObjectId,
        ref : "Productcat"
    },
    Price : {
        type : Number
    },
    Quantity : {
        type : Number
    },
    Unit : {
        type : Number
    },
    Status : {
        type : Boolean
    }
})

mongoose.model("Product",productScehma)