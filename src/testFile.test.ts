jest.mock('./helper', () => ({ logger: jest.fn()}));

import { testFunction } from './testFile';
import { logger } from './helper';

describe('testFile', () => {
  describe('when invoked', () => {
    beforeEach(() => {
      
    });

    it('logs the message', () => {

    });
  });
});
