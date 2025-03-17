const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    Product_id : {
        type : Schema.Types.ObjectId,
        ref : "Product"
    },
    User_id : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
})

module.exports = mongoose.model("Cart",cartSchema)