const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    Product_id : {
        type : Schema.Types.ObjectId,
        ref : 'Product'
    },
    User_id : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    order_status : {
        type : Boolean
    },
    Quantity : {
        type : Number
    },
    Price_per_peice : {
        type : Number
    },
    Total_price : {
       type : Number 
    }
},{
    timestamps : true
})

module.exports = mongoose.model("Order",orderSchema)
