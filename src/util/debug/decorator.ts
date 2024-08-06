import {Debugger} from 'debug';

/**
 * Log arguments and return value of a method.
 * @param logger Debug logger.
 * @returns Return value of decorated method.
 */
export const logged = function (logger: Debugger) {
  return function <This, Args extends unknown[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    >
  ) {
    const wrapped = function (this: This, ...args: Args): Return {
      logger('Calling: %o', context);
      logger('Args: %o', args);

      const result = target.call(this, ...args);

      logger('Returned: %o', result);

      return result;
    };

    return wrapped;
  };
};
