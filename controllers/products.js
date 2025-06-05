const ProductsServices = require("../services/products");

class ProductsController {
  static async getAllProducts(req, res) {
    const { error, data } = await ProductsServices.getAllProducts();

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(200).json(data);
  }

  static async getProductById(req, res) {
    const { error, data } = await ProductsServices.getProductById(
      req.params.id
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(200).json(data);
  }

  static async addProduct(req, res) {
    const { error, data } = await ProductsServices.addProduct(req.body);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }

  static async updateProduct(req, res) {
    const { error, data } = await ProductsServices.updateProduct(
      req.params.id,
      req.body
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }

  static async deleteProduct(req, res) {
    const { error, data } = await ProductsServices.deleteProduct(req.params.id);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }
}

module.exports = ProductsController;
