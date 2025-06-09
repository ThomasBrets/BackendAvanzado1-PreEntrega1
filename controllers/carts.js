const CartsServices = require("../services/carts");

class CartsController {
  static async getCartById(req, res) {
    const { error, data } = await CartsServices.getCartById(req.params.cartId);

    return error
      ? res.status(data.status || 404).json({ message: data })
      : res.status(200).json(data);
  }

  static async addCart(req, res) {
    const { error, data } = await CartsServices.addCart();

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }

  static async addProductToCart(req, res) {
    const { error, data } = await CartsServices.addProductToCart(
      req.params.cartId,
      req.params.productId
    );

        return error
      ? res.status(data.status || 404).json({ message: data })
      : res.status(201).json(data);
  }
}

module.exports = CartsController;
