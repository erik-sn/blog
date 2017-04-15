import Article from '../models/article';
import Token from '../models/token';
import User from '../models/user';

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
  auth: IAuthReducer;
}

export interface IDataReducer {
  articles: Article[];
  searchResults: Article[];
  searchValue: string;
}

export interface IAuthReducer {
  token: Token;
  user: User;
  error: boolean;
  errorCode: number;
  errorText: string;
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
