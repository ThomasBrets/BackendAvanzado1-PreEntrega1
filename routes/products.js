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



//? Complete Routes

// GETPRODUCTS => http://localhost:8080/api/products/all-products
// GETPRODUCTBYID => http://localhost:8080/api/products/f3f08615-ad39-46e0-8a78-3dc9329d75cb

// ADDPRODUCT => http://localhost:8080/api/products/addProduct

// UPDATEPRODUCT =>  http://localhost:8080/api/products/f3f08615-ad39-46e0-8a78-3dc9329d75cb



module.exports = router