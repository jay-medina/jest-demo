jest.mock('./helper', () => ({ logger: jest.fn() }));

const { testFunction } = require('./testFile');
const { logger } = require('./helper');

describe('testFile', () => {
  describe('when invoked', () => {
    beforeEach(() => {
      testFunction('errorMsg');
    });

    it('fails to print the error line', () => {
      expect(logger).toHaveBeenCalledWith('errorMsg');
    });
  });

  describe('when invoked', () => {
    beforeEach(() => {
      testFunction('errorMsg');
    });

    it('prints the error line now', () => {
      expect(logger).toHaveBeenCalledWith('errorMsg', 'fail on purpose');
    });
  });

  describe('when invoked', () => {
    beforeEach(() => {
      testFunction('errorMsg');
    });

    it('passes only when explicit', () => {
      expect(logger).toHaveBeenCalledWith('errorMsg', undefined);
    });
  });
});
