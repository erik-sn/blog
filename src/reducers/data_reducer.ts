import { IAction, IDataReducer } from '../constants/interfaces';
import { ACTIONS } from '../constants/types';
import Article from '../models/article';

export const initialState: IDataReducer = {
  articles: [],
};

export default (state: IDataReducer = initialState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload.data.map((object: any) => new Article(object)),
      };
    default:
      return state;
  }
};
