import * as axios from 'axios';
import * as cookie from 'js-cookie';
import * as moment from 'moment';
import * as Redux from 'redux';

import { IAction, IReduxState } from '../constants/interfaces';
import { ACTIONS } from '../constants/types';
import Token from '../models/token';

const AuthMiddleware = (store: Redux.Store<IReduxState>) => (next: any) => (action: any) => {
  if (action.type === ACTIONS.LOGIN || action.type === ACTIONS.REFRESH_AUTH) {
    const { token, user } = action.payload.data;
    const tokenObject = new Token(token);
    // tslint:disable-next-line:no-string-literal
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenObject.accessToken}`;
    cookie.set('auth_token', tokenObject.stringify(), { expires: tokenObject.expires.toDate() });
  }
  if (action.type === ACTIONS.LOGOUT) {
    cookie.remove('auth_token');
  }
  next(action);
};

export default AuthMiddleware;
