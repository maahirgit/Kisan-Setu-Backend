const router = require('express').Router()
const productController = require('../controller/ProductController')

router.post("/createProduct",productController.createProduct)
router.get("/getProduct",productController.getProduct)

module.exports = router