import { IAction, IDisplayReducer } from '../constants/interfaces';
import { ACTIONS } from '../constants/types';

export const initialState: IDisplayReducer = {
  searchActive: false,
  searchValue: '',
};

export default (state: IDisplayReducer = initialState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.SHOW_SEARCH:
      return {
        ...state,
        searchActive: true,
      };
    case ACTIONS.HIDE_SEARCH:
      return {
        ...state,
        searchActive: false,
      };
    case ACTIONS.UPDATE_SEARCH_INPUT:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};
