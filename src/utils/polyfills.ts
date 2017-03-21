
export function runPolyfills(...inputs: any[]): void {
  if (!Array.prototype.find) {
    Array.prototype.find = (predicate) => {
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      const list = Object(this);
      // tslint:disable-next-line:no-bitwise
      const length = list.length >>> 0;
      const thisArg = inputs[1];
      let value;

      for (let i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    };
  }
}
