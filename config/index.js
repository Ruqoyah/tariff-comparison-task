module.exports = {
  basicTarrif: {
    name: "basic electricity tariff",
    baseCostPerMonth: 5,
    consumptionCost: 0.22,
  },
  packagedTarrif: {
    name: "Packaged tariff",
    baseCost: 800,
    consumptionCost: 0.3,
    threshold: 4000,
  },
};
