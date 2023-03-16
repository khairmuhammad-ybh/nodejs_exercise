const datatypeFunc = require("../modules/exercise1/datatype");

describe("datatypeFunc", () => {
  it("expect a boolean", () => {
    expect(typeof datatypeFunc.booleanFunc()).toBe("boolean");
  });
  it("expect a number", () => {
    expect(typeof datatypeFunc.numberFunc()).toBe("number");
  });
  it("expect a string", () => {
    expect(typeof datatypeFunc.stringFunc()).toBe("string");
  });
  it("expect an object", () => {
    expect(typeof datatypeFunc.objectFunc()).toBe("object");
  });
});
