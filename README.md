# @itreg/string-toolkit

A lightweight JavaScript utility library for simple and consistent string case transformations.
Currently supports conversion to `snake_case` and `kebab-case`.

---

## Installation

### npm

```bash
npm install @itreg/string-toolkit
```

### yarn

```bash
yarn add @itreg/string-toolkit
```

---

## Usage

```javascript
const { toSnakeCase, toKebabCase } = require("@itreg/string-toolkit");
```

---

## API

### `toSnakeCase(string)`

Converts a string into `snake_case` (lowercase words separated by underscores).

**Example:**

```javascript
toSnakeCase("Hello World");
// "hello_world"
```

**Behavior:**

* Trims leading/trailing whitespace
* Converts all characters to lowercase
* Replaces spaces and hyphens with underscores
* Removes unsupported special characters

---

### `toKebabCase(string)`

Converts a string into `kebab-case` (lowercase words separated by dashes).

**Example:**

```javascript
toKebabCase("Hello World");
// "hello-world"
```

**Behavior:**

* Trims leading/trailing whitespace
* Converts all characters to lowercase
* Replaces spaces and underscores with dashes
* Removes unsupported special characters

---

## Development

### Install dependencies

```bash
npm install
```

### Run tests

```bash
npm test
```

---

## Testing

This project uses **Jest** for unit testing.

Example test:

```javascript
test("converts string to snake_case", () => {
  expect(toSnakeCase("Hello World")).toBe("hello_world");
});
```

---

## Project Structure

```
string-toolkit/
├── src/
├── tests/
├── README.md
├── package.json
```

---

## Contributing

Contributions are welcome.

Basic workflow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork
5. Open a Pull Request

Please follow the templates provided in the repository for issues and pull requests.

---

## Security

If you discover a vulnerability, please report it according to the instructions in `SECURITY.md`.

---

## License

This project is licensed under the MIT License. See `LICENSE.md` for details.
