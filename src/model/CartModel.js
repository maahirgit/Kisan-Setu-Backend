const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  Product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  User_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Quantity: { // Added Quantity field
    type: Number,
    required: true,
    default: 1, // Default quantity is 1
  },
});

module.exports = mongoose.model("Cart", cartSchema);