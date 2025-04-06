const Order = require("../model/OrderModel")
const orderSchema = require("../model/OrderModel")
const mongoose = require('mongoose');

const createOrder = async (req, res) => {
    try {
        console.log("Received a new order creation request.");

        const { Product_id, User_id, Quantity, Price_per_peice, Total_price } = req.body;

        console.log("Request Body: ", req.body); // Log incoming request data

        // Check if all required fields are present
        if (!Product_id || !User_id || !Quantity || !Price_per_peice || !Total_price) {
            console.log("Missing required fields.");
            return res.status(400).json({ error: "All fields are required." });
        }

        // Validate ObjectIds
        if (!mongoose.Types.ObjectId.isValid(Product_id)) {
            console.log("Invalid Product_id format: ", Product_id);
            return res.status(400).json({ error: "Invalid Product_id format." });
        }

        if (!mongoose.Types.ObjectId.isValid(User_id)) {
            console.log("Invalid User_id format: ", User_id);
            return res.status(400).json({ error: "Invalid User_id format." });
        }

        console.log("Product_id and User_id are valid ObjectIds.");

        // Create a new order instance
        const newOrder = new Order({
            Product_id: new mongoose.Types.ObjectId(Product_id),
            User_id: new mongoose.Types.ObjectId(User_id),
            Quantity: req.body.Quantity,
            Price_per_peice: req.body.Price_per_peice,
            Total_price: req.body.Total_price
        });

        console.log("New Order Object Created: ", newOrder);

        // Save the order to the database
        await newOrder.save();
        console.log("Order saved successfully to the database.");

        res.status(201).json({ message: "Order created successfully", order: newOrder });

    } catch (error) {
        console.error("Error placing order: ", error.message);
        res.status(500).json({ error: "Failed to place order. Please try again later." });
    }
};

const getOrder = async(req,res) => {
    const getOrder = await orderSchema.find()
    if(getOrder){
        res.status(200).json({
            message : "Order Fetched Successfully",
            data : getOrder
        })
    }
}

module.exports = {
    createOrder,
    getOrder
}