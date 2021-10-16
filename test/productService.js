const assert = require("assert");
const ProductFactory = require("../services/ProductFactory");

describe("Product Service", () => {
  describe("compare", () => {
    const productService = ProductFactory.create();

    it("should compare products with 3500 kWh consumption based on the annual cost", () => {
      const result = productService.compare(3500);

      assert.strictEqual(result[0].annualCost <= result[1].annualCost, true);
    });

    it("should compare products with 4500 kWh consumption based on the annual cost", () => {
      const result = productService.compare(4500);

      assert.strictEqual(result[0].annualCost <= result[1].annualCost, true);
    });

    it("should compare products with 6000 kWh consumption based on the annual cost", () => {
      const result = productService.compare(6000);

      assert.strictEqual(result[0].annualCost <= result[1].annualCost, true);
    });
  });
});
