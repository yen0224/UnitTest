const prime = require("./prime");

test("adds 1 + 2 to equal 3", () => {
    expect(prime.check(2)).toBe(true);
});