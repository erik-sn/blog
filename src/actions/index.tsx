import * as axios from 'axios';

import { IAction } from '../constants/interfaces';
import { ACTIONS, API } from '../constants/types';

export function fetchArticles(): IAction {
  const request = axios.get(`${API}/articles/`);
  return {
    payload: request,
    type: ACTIONS.FETCH_ARTICLES,
  };
}

export function login(code: string): IAction {
  const request =  axios.post(`${API}/login/${code}/`);
  return {
    payload: request,
    type: ACTIONS.LOGIN,
  };
}

export function refresh(accessToken: string, refreshToken: string): IAction {
  // tslint:disable-next-line:no-string-literal
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  const request = axios.post(`${API}/refresh/${refreshToken}/`);
  return {
    payload: request,
    type: ACTIONS.REFRESH_AUTH,
  };
}

export function logout(accessToken: string): IAction {
  const request =  axios.post(`${API}/logout/${accessToken}/`);
  return {
    payload: request,
    type: ACTIONS.LOGOUT,
  };
}
