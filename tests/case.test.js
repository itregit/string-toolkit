const { toSnakeCase } = require("../src");

test("converts string to snake_case", () => {
  expect(toSnakeCase("Hello World")).toBe("hello_world");
});

const { toKebabCase } = require("../src");

test("converts string to kebab-case", () => {
  expect(toKebabCase("Hello World")).toBe("hello-world");
});