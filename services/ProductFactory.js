const config = require("../config");

const BasicTarrif = require("./products/BasicTarrif");
const PackagedTarrif = require("./products/PackagedTarrif");
const ProductService = require("./ProductService");

class ProductFactory {
  static create() {
    
    const { basicTarrif,  packagedTarrif } = config;

    const basic = new BasicTarrif(
      basicTarrif.name,
      basicTarrif.baseCostPerMonth,
      basicTarrif.consumptionCost
    );
    const packaged = new PackagedTarrif(
      packagedTarrif.name,
      packagedTarrif.baseCost,
      packagedTarrif.consumptionCost,
      packagedTarrif.threshold
    );

    return new ProductService([basic, packaged]);
  }
}

module.exports = ProductFactory;
