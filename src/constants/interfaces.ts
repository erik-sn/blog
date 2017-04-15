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
  auth: IAuthReducer;
  data: IDataReducer;
  display: IDisplayReducer;
  router: IRouter;
}

export interface IDisplayReducer {
  searchActive: boolean;
  searchValue: string;
}

export interface IDataReducer {
  articles: Article[];
  searchResults: Article[];
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
