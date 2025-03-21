const router = require('express').Router()
const productController = require('../controller/ProductController')

router.post("/createProduct",productController.createProduct)
router.get("/getProduct",productController.getProduct)
router.get("/getProductById/:id",productController.getProductById)
module.exports = router