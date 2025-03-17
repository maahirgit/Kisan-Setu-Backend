const articleSchema = require("../model/ArticleModel")
const multer = require('multer')
const CloudinaryController = require("../controller/CloudinaryController")

const Storage = multer.diskStorage({
    filename : function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage : Storage,
    limits : {fileSize : 1000000}
}).single('Image_url') 

const addArticle = async(req,res) => {
    try{
        upload(req,res,async(err) => {
            if(err){
                res.status(400).json({
                    message : err
                })
            }
            else{
                /* const cloudres = await CloudinaryController.uploadFileinCloudinary(req.file)
                const articleimg = cloudres.secure_url */
                const articletitle = req.body.Title
                const articlecontent = req.body.Content
                const articlecategory = req.body.Category_id
                const articlepublish = req.body.Published_date
                const articlestatus = req.body.Status

                const uploadObj = {
                    Title : articletitle,
                    Content : articlecontent,
                    Category_id : articlecategory,
                    Published_date : articlepublish,
                    //Image_url : articleimg, 
                    Status : articlestatus,
                }

                const saved = await articleSchema.create(uploadObj)

                res.status(201).json({
                    message : "Article created successfully",
                    data : saved
                })
            }
        })
    }catch(e){
        res.status(402).json({
            message : e
        })
    }
}

const getArticle = async(req,res) => {
    const savedArticle = await articleSchema.find().populate('Category_id')
    if(savedArticle){
        res.status(200).json({
            message : "Article Fetched Successfully",
            data : savedArticle
        })
    }
}
module.exports = {
    addArticle,
    getArticle
}