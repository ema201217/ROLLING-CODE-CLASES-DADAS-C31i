const Product = require("../database/models/Product");

module.exports = {
  getProducts: async (req, res) => {
    try {
      const { q } = req.query;
      let options = {};

      if (q) {
        options = {
          $or: [
            {
              name: { $regex: q, $options: "i" },
            },
            {
              description: { $regex: q, $options: "i" },
            },
          ],
        }; //name --> Samsung A33  --> samsung A33
      } //cliente -->  q --> A33

      const products = await Product.find(options);
      res.status(200).json({
        ok: true,
        quantity: products.length,
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  },
  detailProduct: async (req, res) => {
    try {
      const { idProduct } = req.params; // 6451a73c6c4ce11c7e55f05c
      const productFound = await Product.findById(idProduct);
      res.status(200).json({ product: productFound });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  },
  createProduct: (req, res) => {
    res.json({ mensaje: "Creando producto" });
  },
  deleteProduct: (req, res) => {
    // req.query
    // req.body
    // req.params
    res.json({ mensaje: "Producto eliminado" });
  },
  updateProduct: (req, res) => {
    res.json({ mensaje: "Producto editado" });
  },
};
