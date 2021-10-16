const assert = require("assert");
const request = require("supertest");
const routes = require("../routes");

describe("routes", () => {
  it("should return the product tarrif for consumption 3500 kWh", (done) => {
    request(routes)
      .get("/api/products/3500")
      .send()
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        assert.strictEqual(res.body.length > 0, true);
        assert.strictEqual(res.body[0].annualCost <= res.body[1].annualCost, true);

        done();
      });
  });

  it("should return an error when passed 0 kWh", (done) => {
    request(routes)
      .get("/api/products/0")
      .send()
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        assert.strictEqual(res.body.message, "Minimum consumption is 1");

        return done();
      });
  });

  it("should return 404 if no param passed to the API", (done) => {
    request(routes)
      .get("/api/products")
      .send()
      .expect(404)
      .end(() => {
        return done();
      });
  });
});
