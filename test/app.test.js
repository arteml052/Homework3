const test = require("node:test");
const assert = require("node:assert/strict");
const { sum } = require("../src/app");

test("функция sum складывает два числа", () => {
  assert.equal(sum(2, 3), 5);
});