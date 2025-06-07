const express = require("express")
const router = express.Router()
const CartsController = require("../controllers/carts")

//! GET
router.get("/:cartId", CartsController.getCartById())

//!POST
router.post("/", CartsController.addCart())
router.post("/:cartId/product/:productId", CartsController.addProduct())

module.exports = router

