import { IAction, IAuthReducer } from '../constants/interfaces';
import { ACTIONS } from '../constants/types';
import Token from '../models/token';
import User from '../models/user';

export const initialState: IAuthReducer = {
  error: false,
  errorCode: -1,
  errorText: '',
  token: undefined,
  user: undefined,
};

export default (state: IAuthReducer = initialState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      if (!action.payload.data) {
        return Object.assign({}, {
          ...state,
          error: true,
          errorCode: action.payload.response.status,
          errorText: action.payload.response.statusText,
        });
      }
      return Object.assign({}, {
        ...state,
        token: new Token(action.payload.data.token),
        user: new User(action.payload.data.user),
      });
    case ACTIONS.REFRESH_AUTH:
      if (!action.payload.data) {
        return Object.assign({}, {
          ...state,
          error: true,
          errorCode: action.payload.response.status,
          errorText: action.payload.response.statusText,
        });
      }
      return Object.assign({}, {
        ...state,
        token: new Token(action.payload.data.token),
        user: new User(action.payload.data.user),
      });
    case ACTIONS.LOGOUT:
      return Object.assign({}, {
        ...state,
        token: undefined,
        user: undefined,
      });
    default:
      return state;
  }
};
