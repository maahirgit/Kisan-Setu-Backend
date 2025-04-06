const router = require('express').Router();
const cartController = require("../controller/CartController");

router.post("/createCart", cartController.createCart);
router.get("/getCart/:userId", cartController.getCartByUser);
router.delete("/deleteCartItem/:productId", cartController.deleteCartItem); // Added route

module.exports = router;