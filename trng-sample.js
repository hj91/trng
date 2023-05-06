//Example of using trng module

const trng = require("trng");

trng.generate(32, function(randomHexString) {
  console.log("Random hex string:", randomHexString);
});

