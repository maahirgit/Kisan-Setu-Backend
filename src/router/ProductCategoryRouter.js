const router = require('express').Router()
const productcatController = require("../controller/ProductCartegoryController")

router.post("/createProductcat",productcatController.createProductcat)
router.get("/getProductcat",productcatController.getProductcat)

module.exports = router

