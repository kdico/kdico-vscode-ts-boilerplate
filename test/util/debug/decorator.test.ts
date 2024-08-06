import {Debugger} from 'debug';

import {logged} from '../../../src/util/debug/decorator';

jest.mock('debug');

describe('logged', () => {
  describe('method', () => {
    const args = [Symbol()];

    let cls: {method: CallableFunction};

    let logger: unknown;
    let ret: unknown;

    beforeEach(() => {
      logger = jest.fn();

      cls = new (class {
        @logged(logger as Debugger)
        method(...args: unknown[]) {
          return args;
        }
      })();

      ret = cls.method(...args);
    });

    it('calls debug', () => {
      expect(logger).toHaveBeenCalledTimes(3);
    });

    it('returns target return value', () => {
      expect(ret).toEqual(args);
    });
  });
});
