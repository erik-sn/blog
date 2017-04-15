import { IAction, IDataReducer } from '../constants/interfaces';
import { ACTIONS } from '../constants/types';
import Article from '../models/article';

export const initialState: IDataReducer = {
  articles: [],
  searchResults: [],
};

export default (state: IDataReducer = initialState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload.data.map((object: any) => new Article(object)),
      };
    case ACTIONS.ARTICLE_SEARCH:
      return {
        ...state,
        searchResults: action.payload.data.map((object: any) => new Article(object)),
        searchValue: action.meta.searchValue,
      };
    case ACTIONS.RESET_ARTICLE_SEARCH:
      return {
        ...state,
        searchResults: [],
        searchValue: '',
      };
    default:
      return state;
  }
};
