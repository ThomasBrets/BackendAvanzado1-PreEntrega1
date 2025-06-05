const express = require("express")
const router = express.Router()
const ProductsController = require("../controllers/products")

//! GET
router.get("/all-products", ProductsController.getAllProducts)
router.get("/:productsId", ProductsController.getProductById)

//! POST 
router.post("/addProduct", ProductsController.addProduct)

//! PUT 
router.put("/:productId", ProductsController.updateProduct) 

//!DELETE
router.delete("/:productId", ProductsController.deleteProduct)


module.exports = router