/**
 * declaration file to appease compiler on modules that have 
 * no declarations on npm/@types. Possible to further extend
 * these as necessary.
 * 
 * Try to keep these in alphabetical order!
 */

declare module 'autoprefixer' {
  const _: any;
  export = _;
}

declare module 'axios' {
  const _: any;
  export = _;
}

declare module 'invariant' {
  const _: any;
  export = _;
}

declare module 'js-cookie' {
  const _: any;
  export = _;
}

declare module 'extract-text-webpack-plugin' {
  const _: any;
  export = _;
}

interface Array<T> {
    find(predicate: (search: T) => boolean) : T;
}

declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}

declare module 'react-router' {
  export const Router: any;
  export const StaticRouter: any;
  export const BrowserRouter: any;
  export const Route: any;
  export const Link: any;
}

declare module 'react-router-dom' {
  export const Router: any;
  export const Switch: any;
  export const StaticRouter: any;
  export const BrowserRouter: any;
  export const Route: any;
  export const Link: any;
  export const withRouter: any;

  export interface IMatch {
    isExact: boolean;
    params: any;
    path: string;
    url: string;
  }

  export interface ILocation {
    key?: string;
    pathname: string;
    search: string;
    hash: string;
    state: any;
  }
}

declare module 'react-router-redux' {
  export const ConnectedRouter: any;
  export const routerMiddleware: any;
  export const routerReducer: any;
}