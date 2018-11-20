const hello = require('../hello');

it("should output Hello", () => {
    expect(hello()).toBe("Hello");
});