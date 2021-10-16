class ProductService {
  constructor(products) {
    this.products = products;
  }

  compare(kWh) {
    const tariffs = this.products.map((product) => {
      return {
        tariffName: product.getName(),
        annualCost: product.calculationModel(kWh),
      };
    });

    return this.sortByAnnualCost(tariffs);
  }

  sortByAnnualCost(tariffs) {
    return tariffs.sort((a, b) => {
      if (a.annualCost > b.annualCost) {
        return 1;
      }

      if (a.annualCost < b.annualCost) {
        return -1;
      }

      return 0;
    });
  }
}

module.exports = ProductService;
