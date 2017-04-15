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

export function articleSearch(searchValue: string): IAction {
  // case where there is nothing to search
  if (!searchValue.trim() || searchValue.trim().length < 4) {
    return {
      meta: {
        searchValue,
      },
      payload: {
        data: [],
      },
      type: ACTIONS.ARTICLE_SEARCH,
    };
  }
  const request = axios.get(`${API}/articles/?search=${searchValue}`);
  return {
    meta: {
      searchValue,
    },
    payload: request,
    type: ACTIONS.ARTICLE_SEARCH,
  };

}

export function resetArticleSearch(): IAction {
  return {
    payload: undefined,
    type: ACTIONS.RESET_ARTICLE_SEARCH,
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
