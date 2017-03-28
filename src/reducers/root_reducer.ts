import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import AuthReducer from './auth_reducer';
import DataReducer from './data_reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  data: DataReducer,
  router: routerReducer,
});

export default rootReducer;
