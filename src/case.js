function toSnakeCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\s\-]+/g, "_")
    .replace(/[^\w_]/g, "");
}

module.exports = {
  toSnakeCase
};