import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import * as promise from 'redux-promise';

import Application from './components/application';
import ConnectedRouter from './connected_router';
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

// configure redux dev tools
declare const window: any; // make typescript happy
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
                                                  window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Application />
    </ConnectedRouter>
  </Provider>
);

export default App;
