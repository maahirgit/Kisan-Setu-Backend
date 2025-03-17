const orderSchema = require("../model/OrderModel")

const createOrder = async(req,res) => {
    const order = req.body

    const savedorder = await orderSchema.create(order)

    res.status(200).json({
        message : "Order Placed Successfully",
        data : savedorder
    })
}

const getOrder = async(req,res) => {
    const getOrder = await orderSchema.find()
    if(getOrder){
        res.status(200).json({
            message : "Order Fetched Successfully",
            data : getOrder
        })
    }
}

module.exports = {
    createOrder,
    getOrder
}