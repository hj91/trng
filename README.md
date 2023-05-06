# trng

A True Random Number Generator (TRNG) module for Node.js that generates highly random data by combining multiple sources of entropy.

## Features

- Generates random data by combining multiple sources of entropy.
- Output is provided as a hexadecimal string.
- Configurable output length.

## Installation

```bash
npm install trng
```

## Usage

```javascript
const trng = require("trng");
var length = 32;

trng.generate(length, function(randomHexString) {
  console.log("Random hex string:", randomHexString);
});
```

### `trng.generate(length, callback)`

- `length`: The desired length of the generated random hexadecimal string.
- `callback`: A callback function that takes the generated random hexadecimal string as a parameter.

## Example

```javascript
const trng = require("trng");

trng.generate(32, function(randomHexString) {
  console.log("Random hex string (32 characters):", randomHexString);
});
```

## License

GNU General Public License v3.0

Copyright 2023 Bufferstack.IO Analytics Technology LLP, Pune

See the [LICENSE](LICENSE) file for more details.
