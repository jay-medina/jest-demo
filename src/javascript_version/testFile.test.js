jest.mock('./helper', () => ({ logger: jest.fn() }));

const { testFunction } = require('./testFile');
const { logger } = require('./helper');

describe('testFile', () => {
  describe('when invoked', () => {
    beforeEach(() => {
      testFunction('errorMsg');
    });

    it('logs the message', () => {
      expect(logger).toHaveBeenCalledWith('errorMsg');
    });
  });
});
