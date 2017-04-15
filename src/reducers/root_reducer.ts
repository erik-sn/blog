import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import AuthReducer from './auth_reducer';
import DataReducer from './data_reducer';
import DisplayReducer from './display_reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  data: DataReducer,
  display: DisplayReducer,
  router: routerReducer,
});

export default rootReducer;
