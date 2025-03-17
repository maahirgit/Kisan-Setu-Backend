const productSchema = require("../model/ProductModel")

const createProduct = async(req,res) => {
    const product = req.body

    const savedorder = await productSchema.create(product)

    res.status(200).json({
        message : "Product Added Successfully",
        data : savedorder
    })
}

const getProduct = async(req,res) => {
    const getProduct = await productSchema.find().populate('Productcat')
    if(getProduct){
        res.status(200).json({
            message : "Product Fetched Successfully",
            data : getProduct
        })
    }
}

module.exports = {
    createProduct,
    getProduct
}