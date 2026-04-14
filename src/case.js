function toSnakeCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\s\-]+/g, "_")
    .replace(/[^\w_]/g, "");
}

function toKebabCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]/g, "");
}

module.exports = {
  toSnakeCase,
  toKebabCase
};