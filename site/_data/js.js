// JavaScript is included a data file so it can be compiled and inlined at runtime
// Individual files are also generated by `/site/js.njk`

require("dotenv").config();
const { compileWebpackTargets } = require("../utils/compile-webpack");

// Add Webpack compilation targets here
const targets = {
  main: "site/src/js/main.js",
  "service-worker": "site/src/js/service-worker.js",
};

// Create an object with the compiled files from each entry defined in targets
module.exports = compileWebpackTargets(targets);
