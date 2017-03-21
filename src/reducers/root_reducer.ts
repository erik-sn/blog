import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import DataReducer from './data_reducer';

const rootReducer = combineReducers({
  data: DataReducer,
  router: routerReducer,
});

export default rootReducer;
