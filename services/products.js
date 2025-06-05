const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "../data/products.json");

class ProductsServices {
  static async getAllProducts() {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      const products = JSON.parse(data);

      return { error: false, data: products };
    } catch (error) {
      return { error: false, data: error.message };
    }
  }

  static async getProductById(id) {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      const products = JSON.parse(data);

      const product = products.find((p) => p.id === id);

      if (!product) {
        return {
          error: true,
          data: { status: 404, message: "Producto no encontrado" },
        };
      }

      return { error: false, data: products };
    } catch (error) {
      return { error: false, data: error.message };
    }
  }

  static async addProduct(productData) {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      const products = JSON.parse(data);

      const newProduct = { id: uuidv4(), status: true, ...productData };
      products.push(newProduct);

      await fs.writeFile(filePath, JSON.stringify(products, null, 2));

      return { error: false, data: newProduct };
    } catch (error) {
      return { error: false, data: error.message };
    }
  }

  static async addProduct(id, updateData) {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      const products = JSON.parse(data);

      const index = products.findIndex((p) => p.id === id);
      if (index === -1) {
        return {
          error: true,
          data: { status: 404, message: "Producto no encontrado" },
        };
      }

      products[index] = {
        ...products[index],
        ...updateData,
        id: products[index].id, // aseguramos que el ID no cambie
      };

      await fs.writeFile(filePath, JSON.stringify(products, null, 2));

      return { error: false, data: products[index] };
    } catch (error) {
      return { error: false, data: error.message };
    }
  }

  static async deleteProduct() {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      const products = JSON.parse(data);

      const updatedProducts = products.filter((p) => p.id !== id);

      if (products.length === updatedProducts.length) {
        return {
          error: true,
          data: { status: 404, message: "Producto no encontrado" },
        };
      }

      await fs.writeFile(filePath, JSON.stringify(updatedProducts, null, 2));
      return {
        error: false,
        data: { message: "Producto eliminado correctamente" },
      };
    } catch (error) {
      return { error: false, data: error.message };
    }
  }
}

module.exports = ProductsServices;
