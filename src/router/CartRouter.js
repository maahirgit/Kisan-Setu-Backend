const router = require('express').Router();
const cartController = require("../controller/CartController");

router.post("/createCart", cartController.createCart);
router.get("/getCart/:userId", cartController.getCartByUser); // Added route

module.exports = router;