class BasicTarrif {
  constructor(name, baseCostPerMonth, consumptionCost) {
    this.name = name;
    this.baseCostPerMonth = baseCostPerMonth;
    this.consumptionCost = consumptionCost;
    this.months = 12;
  }

  getName() {
    return this.name;
  }

  calculationModel(kWh) {
    return this.baseCostPerMonth * this.months + this.consumptionCost * kWh;
  }
}

module.exports = BasicTarrif;
