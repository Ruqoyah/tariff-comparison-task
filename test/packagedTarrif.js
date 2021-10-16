const assert = require("assert");
const PackagedTarrif = require("../services/products/packagedTarrif");

describe("Packaged tariff", () => {
  const name = "Packaged tariff";
  const packagedTarrif = new PackagedTarrif(name, 800, 0.3, 4000);

  it("should get matched name", () => {
    assert.strictEqual(packagedTarrif.getName(), name);
  });

  it("should return false if compare with a different name", () => {
    assert.strictEqual(packagedTarrif.getName() === "name", false);
  });

  it("should calculate packaged tarrif with a consumption of 3500 kWh", () => {
    assert.strictEqual(packagedTarrif.calculationModel(3500), 800);
  });

  it("should calculate packaged tarrif with a consumption of 4500 kWh", () => {
    assert.strictEqual(packagedTarrif.calculationModel(4500), 950);
  });

  it("should calculate packaged tarrif with a consumption of 6000 kWh", () => {
    assert.strictEqual(packagedTarrif.calculationModel(6000), 1400);
  });
});
