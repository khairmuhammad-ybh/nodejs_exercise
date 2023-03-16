const arithmeticFunc = require("../modules/exercise1/arithmetic");

describe("arithmeticFunc", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(arithmeticFunc.addition(1, 2)).toBe(3);
  });
  it("subtract 10 - 4 to equal 6", () => {
    expect(arithmeticFunc.subtraction(10, 4)).toBe(6);
  });
  it("multiply 8 * 4 to equal 32", () => {
    expect(arithmeticFunc.multiplication(8, 4)).toBe(32);
  });
  it("divide 24 / 2 to equal 12", () => {
    expect(arithmeticFunc.division(24, 2)).toBe(12);
  });
});
