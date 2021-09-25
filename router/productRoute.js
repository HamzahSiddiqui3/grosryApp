const express = require("express")
const Router = express.Router();
const { addProduct, showProducts, editProducts, deleteProducts } = require("./../controller/product");
const checkAuth = require("./../middlewares/check-auth");


Router.post("/addProduct", checkAuth, addProduct)
Router.get("/displayProducts", checkAuth, showProducts)
Router.get("/deleteProducts/:id", checkAuth, deleteProducts)
Router.put("/editProducts/:id", checkAuth, editProducts)


module.exports = Router;