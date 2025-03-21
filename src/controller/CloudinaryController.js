const cloudinary = require("cloudinary").v2

const uploadFileinCloudinary = async (file) => {
    cloudinary.config({
       cloud_name: "dcgwuwjj0",
       api_key: "511297311326428",
       api_secret: "0gZeRBZ7b5Wqlzs00rWvvGLXH24",
    });

    const response = await cloudinary.uploader.upload(file.path)
    return response
}

module.exports = {
    uploadFileinCloudinary
}