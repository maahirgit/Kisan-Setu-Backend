const router = require('express').Router()
const cartController = require("../controller/CartController")

router.post("/createCart",cartController.createCart)
router.get("/getCart",cartController.getCart)

module.exports = router