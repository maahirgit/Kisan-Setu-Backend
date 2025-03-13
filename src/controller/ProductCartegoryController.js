const productcatSchema = require('../model/ProductCategoryModel')

const createProductcat = async(req,res) => {
    const productcat = req.body 
    
    const savedproduct = await productcatSchema.create(productcat)

    res.status(200).json({
        message : "Products Category Created Successfully",
        data : savedproduct
    })
}

const getProductcat = async(req,res) => {
    const getProduct = await productcatSchema.find()
    if(getProduct){
        res.status(200).json({
            message : "Products Category Fetched Successfully",
            data : getProduct
        })
    }
    else{
        res.status(400).json({
            message : "Error In Fetching Category"
        })
    }
}

module.exports = {
    createProductcat,
    getProductcat
}