const cartSchema = require("../model/CartModel");

const createCart = async (req, res) => {
  try {
    const cart = req.body;

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

const getCartByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const getCart = await cartSchema.find({ User_id: userId }).populate("User_id").populate("Product_id");

    if (getCart.length > 0) {
      res.status(200).json({
        message: "Cart Fetched Successfully",
        data: getCart,
      });
    } else {
      res.status(404).json({ message: "Cart not found for this user." });
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Failed to fetch cart." });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const productId = req.params.productId;

    const deletedItem = await cartSchema.findOneAndDelete({ Product_id: productId });

    if (deletedItem) {
      res.status(200).json({ message: "Cart item deleted successfully." });
    } else {
      res.status(404).json({ message: "Cart item not found." });
    }
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ message: "Failed to delete cart item." });
  }
};

module.exports = {
  createCart,
  getCartByUser,
  deleteCartItem,
};