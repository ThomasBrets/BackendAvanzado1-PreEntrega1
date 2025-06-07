const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "../data/carts.json");

class CartsServices {
  static async getCartById(id) {
    try {
      const data = fs.readFile(filePath, "utf-8");
      const carts = JSON.parse(data);

      const cart = carts.find((c) => c.id === id);

      if (!cart) {
        return {
          error: true,
          data: { status: 404, message: "carrito no encontrado" },
        };
      }
      return { error: false, data: cart };
    } catch (error) {
        return { error: true, data: error.message}
    }
  }

  static async addCart(req, res) {
    
  }

  static async addProduct(req, res) {}
}

module.exports = CartsServices;
