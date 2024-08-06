import {logger} from '../src/util/debug/logger';
import {logged} from '../src/util/debug/decorator';

export class SampleClass {
  foo = 1;

  @logged(logger)
  bar(...args: unknown[]): number {
    return args.length;
  }

  @logged(logger)
  baz(): number {
    return this.foo;
  }
}

const sample = new SampleClass();

const circular: Record<string, unknown> = {};
circular.circular = circular;

sample.bar(null, 1, 'bar', circular);
sample.baz();
