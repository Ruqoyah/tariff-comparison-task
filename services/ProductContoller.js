const ProductFactory = require("./ProductFactory");

const ProductService = ProductFactory.create();

class ProductContoller {
  static getProducts(req, res) {
    const { consumption } = req.params;

    if (consumption < 1) {
      return res.status(400).json({
        message: "Minimum consumption is 1",
      });
    }
    const result = ProductService.compare(consumption);

    res.status(200).json(result);
  }
}

module.exports = ProductContoller;
