const path = require('path');

const SRC = path.resolve(__dirname, 'src');

module.exports = {
  modulePaths:[SRC, 'node_modules'],
  setupTestFrameworkScriptFile: path.resolve(__dirname, 'jest-setup.js'),
};
