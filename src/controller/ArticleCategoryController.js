const articlecatSchema = require("../model/ArticleCategoryModel")

const createArticle = async(req,res) => {
    const article = req.body
    const savedArticle = await articlecatSchema.create(article)

    res.status(200).json({
        message : "Article Created Successfully",
        data : savedArticle
    })
}

const getArticle = async(req,res) => {
    const getArticle = await articlecatSchema.find()
    if(getArticle){
        res.status(200).json({
            message : "Article Fetched Successfully",
            data : getArticle
        })
    }
    else{
        res.status(400).json({
            message : "Error In Fetching Article"
        })
    }
}

module.exports = {
    createArticle,
    getArticle
}
