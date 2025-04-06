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
    Image_url : {
        type : String
    },
    Description : {
        type : String
    },
  /*   Category_id : {
        type : Schema.Types.ObjectId,
        ref : "Productcat"
    }, */
    Price : {
        type : String
    },
    Quantity : {
        type : String
    },
    Unit : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

module.exports = mongoose.model("Product",productScehma)