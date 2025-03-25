const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
app.use(express.json())

app.use(cors({ origin: "http://localhost:5173" }));

const UserRoutes = require("./src/router/UserRouter")
app.use("/user",UserRoutes)

const RoleRoutes = require("./src/router/RoleRouter")
app.use("/role",RoleRoutes)

const ArticlecatRoutes = require("./src/router/ArticleCategoryRouter")
app.use("/articlecat",ArticlecatRoutes)

const ArticleRoutes = require("./src/router/ArticleRouter")
app.use("/article",ArticleRoutes)

const ProductcatRoutes = require("./src/router/ProductCategoryRouter")
app.use("/productcat",ProductcatRoutes)

const OrderRoutes = require("./src/router/OrderRouter")
app.use("/order",OrderRoutes)

const ProductRoutes = require("./src/router/ProductRouter")
app.use("/product",ProductRoutes)

const CartRoutes = require("./src/router/CartRouter")
app.use("/cart",CartRoutes)

const db = mongoose.connect("mongodb+srv://maahir:maahir4252@omtraders.jrdqe.mongodb.net/kisansetu")
db.then((data) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log(err)
})

const PORT = 3001
app.listen(PORT,() => {
    console.log("Server is connected to port 3001")
})