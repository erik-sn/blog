import Article from '../models/article';

/**
 * Redux Interfaces
 */

interface IReactRedux {
  action: string;
  hash: string;
  key: string;
  pathname: string;
  query: any;
  state: string;
}

export interface IAction {
  error?: boolean;
  payload: any;
  type: string;
  meta?: any;
}

export interface IReduxState {
  router: IRouter;
  data: IDataReducer;
}

export interface IDataReducer {
  articles: Article[];
}


/* Router */
interface IRouterLocation {
  hash: string;
  key: string;
  pathname: string;
  search: string;
}

interface IRouter {
  location: IRouterLocation;
}



