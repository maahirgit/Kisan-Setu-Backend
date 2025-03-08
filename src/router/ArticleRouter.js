const router = require('express').Router()
const articleController = require("../controller/ArticleController")

router.post("/addArticle",articleController.addArticle)

module.exports = router