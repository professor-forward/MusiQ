process.env.NODE_ENV = "test";

console.log("Running Tests...");
var assert = require("assert");
describe("Express", function() {
  it("running", function() {
    assert.equal(true, true);
  });
});
