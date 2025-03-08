const cloudinary = require("cloudinary").v2

const uploadFileinCloudinary = async (file) => {
    cloudinary.config({
        cloud_name : "dpqn7unki",
        api_key : "942182897872969",
        api_secret : "epKEePgFGBKQV8YQWcIzN4f3W2k"
    });

    const response = await cloudinary.uploader.upload(file.path)
    return response
}

module.exports = {
    uploadFileinCloudinary
}