// tslint:disable-next-line:no-var-requires
const config = require('../../config.json');

export const HOME_URL: string = config.api;
export const API: string = `${config.api}/api`;

export const ACTIONS = {
  ARTICLE_SEARCH: 'ARTICLE_SEARCH',
  FETCH_ARTICLES: 'FETCH_ARTICLES',
  HIDE_SEARCH: 'HIDE_SEARCH',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REFRESH_AUTH: 'REFRESH_AUTH',
  RESET_ARTICLE_SEARCH: 'RESET_ARTICLE_SEARCH',
  SHOW_SEARCH: 'SHOW_SEARCH',
  UPDATE_SEARCH_INPUT: 'UPDATE_SEARCH_INPUT',
};
