const express = require("express");
const router = express.Router();
const CartsController = require("../controllers/carts");

//! GET
router.get("/:cartId", CartsController.getCartById);

//!POST
router.post("/", CartsController.addCart);
router.post("/:cartId/product/:productId", CartsController.addProductToCart);

//? Complete Routes

// GETCARTBYID => http://localhost:8080/api/carts/0b8be2f9-7ff5-4794-8a18-55030f9af8de

// ADDCART => http://localhost:8080/api/carts
// ADDPRODUCTTOCART =>  http://localhost:8080/api/carts/0b8be2f9-7ff5-4794-8a18-55030f9af8de/product/f3f08615-ad39-46e0-8a78-3dc9329d75cb

module.exports = router;
