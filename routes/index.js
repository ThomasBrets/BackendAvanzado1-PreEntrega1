const express = require("express")
const router = express.Router()

const carts = require("./carts")
const products = require("./products")

router.use("/carts", carts)
router.use("/products", products)

module.exports = router
