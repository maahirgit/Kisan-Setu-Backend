const router = require('express').Router()
const articleController = require("../controller/ArticleController")

router.post("/addArticle",articleController.addArticle)
router.get("/getArticle",articleController.getArticle)

module.exports = router