const cloudinary = require("cloudinary").v2

const uploadFileinCloudinary = async (file) => {
    cloudinary.config({
        cloud_name: "dnklrceyc",
    api_key: "687117512481165",
    api_secret: "BybWuJQqGr_nuXpfHYEi_VTHcJE",
    });

    const response = await cloudinary.uploader.upload(file.path)
    return response
}

module.exports = {
    uploadFileinCloudinary
}