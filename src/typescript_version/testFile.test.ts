jest.mock('./helper', () => ({ logger: jest.fn() }));

import { testFunction } from './testFile';
import { logger } from './helper';

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
