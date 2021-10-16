const assert = require("assert");
const BasicTarrif = require("../services/products/BasicTarrif");

describe("Basic tariff", () => {
  const name = "basic electricity tariff";
  const basicTarrif = new BasicTarrif(name, 5, 0.22);

  it("should get matchedname", () => {
    assert.strictEqual(basicTarrif.getName(), name);
  });

  it("should return false if compare with a different name", () => {
    assert.strictEqual(basicTarrif.getName() === "name", false);
  });

  it("should calculate basic tarrif with a consumption of 3500 kWh", () => {
    assert.strictEqual(basicTarrif.calculationModel(3500), 830);
  });

  it("should calculate basic tarrif with a consumption of 4500 kWh", () => {
    assert.strictEqual(basicTarrif.calculationModel(4500), 1050);
  });

  it("should calculate basic tarrif with a consumption of 6000 kWh", () => {
    assert.strictEqual(basicTarrif.calculationModel(6000), 1380);
  });
});
