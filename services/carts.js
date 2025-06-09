const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "../data/carts.json");

class CartsServices {
  static async getCartById(id) {
    try {
      const data = await fs.readFile(filePath, "utf-8");
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
      return { error: true, data: error.message };
    }
  }

  static async addCart() {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      const carts = JSON.parse(data);

      const newCart = { id: uuidv4(), products: [] };
      carts.push(newCart);

      await fs.writeFile(filePath, JSON.stringify(carts, null, 2));
      return { error: false, data: newCart };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async addProductToCart(cartId, productId) {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      const carts = JSON.parse(data);

      const cart = carts.find((c) => c.id === cartId);

      if (!cart) return null;

      const existProducts = cart.products.find((p) => p.product === productId);

      existProducts
        ? existProducts.quantity++
        : cart.products.push({ product: productId, quantity: 1 });

      await fs.writeFile(filePath, JSON.stringify(carts, null, 2));
      return { error: false, data: cart };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = CartsServices;
