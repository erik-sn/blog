import * as moment from 'moment';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import * as promise from 'redux-promise';

import Application from './components/application';
import ConnectedRouter from './connected_router';
import { IReduxState } from './constants/interfaces';
import AuthMiddleware from './middleware/auth_middleware';
import reducers from './reducers/root_reducer';
import { runPolyfills } from './utils/polyfills';

runPolyfills();

// tslint:disable-next-line:no-var-requires
const { createBrowserHistory } = require('history'); // temporary until type definitions are worked out

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const createStoreWithMiddleware = applyMiddleware(middleware, promise, AuthMiddleware)(createStore);

// require all .scss files for deploy if we are not server rendering
// process.env.BROWSER is set in webpack.config.ts in development but deleted
// in the express.js server. This way no .scss files are required while in
// node which will throw an error, but webpack still bundles them.
if (process.env.BROWSER) {
  const requireAll = (r: any) => r.keys().forEach(r);
  requireAll(require.context('./sass/', true, /\.scss$/));
}

declare const window: any; // make typescript happy
let store: Store<any>;
if (process.env.NODE_ENV === 'production') {
  // production mode with server side rendering
  const preloadedState: IReduxState = window.__PRELOADED_STATE__;
  // server side data is added as a string so we convert the date
  // strings back to moment objects here
  preloadedState.data.articles.forEach((article) => {
    article.date = moment(article.date);
  });
  delete window.__PRELOADED_STATE__;
  store =  createStoreWithMiddleware(reducers, preloadedState);
} else {
  // development mode with redux dev tools
  store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
                                              window.__REDUX_DEVTOOLS_EXTENSION__());
}

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Application />
    </ConnectedRouter>
  </Provider>
);

export default App;
