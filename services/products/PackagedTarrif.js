class PackagedTarrif {
  constructor(name, baseCost, consumptionCost, threshold) {
    this.name = name;
    this.baseCost = baseCost;
    this.consumptionCost = consumptionCost;
    this.threshold = threshold;
  }

  getName() {
    return this.name;
  }

  calculationModel(kWh) {
    if (kWh <= this.threshold) {
      return this.baseCost;
    }

    return this.baseCost + (kWh - this.threshold) * this.consumptionCost;
  }
}

module.exports = PackagedTarrif;
