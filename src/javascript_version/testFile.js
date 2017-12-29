const { logger } = require('./helper');

function testFunction(message, filename) {
  logger(message, filename);
}

module.exports = {
  testFunction
};
