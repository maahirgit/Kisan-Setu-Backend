const router = require('express').Router()
const articlecatController = require("../controller/ArticleCategoryController")

router.post("/createArticlecat",articlecatController.createArticle)
router.get("/getArticlecat",articlecatController.getArticle)
module.exports = router