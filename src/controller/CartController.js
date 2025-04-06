const cartSchema = require("../model/CartModel");

const createCart = async (req, res) => {
  try {
    const cart = req.body;

    // Validate the request body
    if (!cart.Product_id || !cart.User_id || !cart.Quantity) {
      return res.status(400).json({ message: "Product_id, User_id, and Quantity are required." });
    }

    const savedcart = await cartSchema.create(cart);

    res.status(200).json({
      message: "Cart Created Successfully",
      data: savedcart,
    });
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).json({ message: "Failed to create cart." });
  }
};

const getCart = async (req, res) => {
  try {
    const getCart = await cartSchema.find().populate("User_id").populate("Product_id");

    if (getCart) {
      res.status(200).json({
        message: "Cart Fetched Successfully",
        data: getCart,
      });
    } else {
      res.status(404).json({ message: "Cart not found." });
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Failed to fetch cart." });
  }
};

module.exports = {
  createCart,
  getCart,
};