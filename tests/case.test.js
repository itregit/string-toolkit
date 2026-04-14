const { toSnakeCase } = require("../src");

test("converts string to snake_case", () => {
  expect(toSnakeCase("Hello World")).toBe("hello_world");
});