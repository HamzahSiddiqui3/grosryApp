const express = require("express");
const app = express();
const adminMongoose = require("./database/db")
app.use(express.json())

const adminRoute = require("./router/adminRoute")
const userRoute = require("./router/userRoute")
const productRoute = require("./router/productRoute")
const categoryRoute = require("./router/categoryRoute");
app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/products", productRoute);
app.use("/category", categoryRoute);

app.use("*", (req, res, next) => {
    console.log("error 404")
})


app.listen(5000, () => {
    console.log("connected to server")
})