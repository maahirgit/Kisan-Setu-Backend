// productController.js (Backend)
const productSchema = require("../model/ProductModel");
const multer = require("multer");
const CloudinaryController = require("../controller/CloudinaryController");

const Storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: Storage,
    limits: { fileSize: 100000000 },
}).single("Images"); // Changed to 'Images' to match frontend

const createProduct = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                res.status(400).json({
                    message: err,
                });
            } else {
                const cloudres = await CloudinaryController.uploadFileinCloudinary(req.file);
                const productimg = cloudres.secure_url;
                const productname = req.body.Product_name;
                const user_id = req.body.User_id;
                const description = req.body.Description;
                const price = req.body.Price;
                const quantity = req.body.Quantity;
                const unit = req.body.Unit;
                const status = req.body.Status;

                const uploadObj = {
                    User_id: user_id,
                    Product_name: productname,
                    Description: description,
                    Price: price,
                    Quantity: quantity,
                    Unit: unit,
                    Status: status,
                    Image_url: productimg,
                };

                const saved = await productSchema.create(uploadObj);

                res.status(201).json({
                    message: "Product created successfully",
                    data: saved,
                });
            }
        });
    } catch (e) {
        res.status(402).json({
            message: e,
        });
    }
};

const getProduct = async (req, res) => {
    try{
        const getProduct = await productSchema.find().populate("User_id");
        if (getProduct) {
            res.status(200).json({
                message: "Product Fetched Successfully",
                data: getProduct,
            });
        }
    }catch(error){
        res.status(500).json({message: error.message})
    }

};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const product = await productSchema.findById(id);

        if (product) {
            res.status(200).json({
                message: "Product Fetched Successfully",
                data: product,
            });
        } else {
            res.status(404).json({
                message: "Product Not Found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error Fetching Product",
            error: error.message,
        });
    }
};

const getProductByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const products = await productSchema.find({ User_id: userId }).populate("User_id");
        res.status(200).json({
            message: "Products fetched successfully",
            data: products,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProduct,
    getProduct,
    getProductById,
    getProductByUser, // Added getProductByUser
};