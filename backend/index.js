const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
const productSchema = mongoose.Schema({
    name: {
        type: String
},
    ingredients: {
        type: String
    },
    price: {
        type: Number,
    },
    image: {
        type: String
    }
})
const Products = mongoose.model("Product", productSchema)

app.get("/api/products", async (req, res) => {
    const response = await Products.find()
    res.send(response)
})

app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params
    const target = await Products.findById(id)
    res.send(target)
})

app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params
    await Products.findByIdAndDelete(id)
    res.send("item deleted")
})

app.post("/api/products", async (req, res) => {
    const { name,ingredients, price, image } = req.body
    const newProd = new Products({ name: name,ingredients:ingredients, price: price, image: image })
    await newProd.save()
    res.status(201).send("item created")
})

app.put("/api/products/:id", async (req, res) => {
    const { id } = req.params
    const { name,ingredients, price, image } = req.body
    await Products.findByIdAndUpdate(id, { ...req.body })
    res.send("item updated")
})
mongoose.connect("mongodb+srv://Rufat:rufat205@cluster0.46jysgg.mongodb.net/").then(res => {
    console.log("db connected")
})
app.listen(8080, (req, res) => {
    console.log("api running on 8080")
})
