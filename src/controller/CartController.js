const cartSchema = require("../model/CartModel")

const createCart = async(req,res) => {
    const cart = req.body

    const savedcart = await cartSchema.create(cart)

    res.status(200).json({
        message : "Cart Created Successfully",
        data : savedcart
    })
}

const getCart = async(req,res) => {
    const getCart = await cartSchema.find().populate("User").populate("Product")

    if(getCart){
        res.status(200).json({
            message : "Cart Fetched Successfully",
            data : getCart
        })
    }
}

module.exports = {
    createCart,
    getCart
}