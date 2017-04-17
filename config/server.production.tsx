import * as process from 'process';
import { Location } from 'tslint/lib/rules/completedDocsRule';
/* tslint:disable:no-var-requires object-literal-sort-keys */
delete process.env.BROWSER;

import * as axios from 'axios';
import * as compression from 'compression';
import * as express from 'express';
import * as http from 'http';
import * as logger from 'morgan';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
// import {  match, RouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { applyMiddleware, createStore, Store } from 'redux';

import Application from '../src/components/application';
import { IReduxState } from '../src/constants/interfaces';
import { API } from '../src/constants/types';
import Article from '../src/models/article';
import reducers from '../src/reducers/root_reducer';

const appconfig = require('../package.json');


let server: any;

const app = express(); // delcare application
const PORT = process.env.PORT || 4000;

app.use(compression()); // compress compatible files for quicker client load time
app.use(logger('dev')); // log content

// Set path to public assets
app.use('/static', express.static('dist'));
app.use('/dist', express.static('dist'));

/**
 * For every request send the URL to React Router The router will return the content that should be
 * delivered to the user. If the URL does not match any route, a 404 will be returned.
 *
 * React renders the component that should be returned in string format, and that string is served to the
 * client in an html form with static resources attached to it. After this page is loaded, any links o
 * routing that takes place will be handled purely by the javascript in react router.
 */
const context: any = {};
app.use('/', (req: any, res: any) => {
  axios.get(`${API}/articles/`).then((response: any) => {
    const articles: Article[] = response.data.map((object: any) => new Article(object));
    const initialStore = createInitialStore(articles);
    const html = generateHtml(initialStore, req);
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
    } else {
      res.header('Content-Type', 'text/html; charset=utf-8');
      res.write(renderFullPage(html, appconfig.version, initialStore));
      res.end();
    }
  })
  .catch(() => {
    const initialStore = createInitialStore([]);
    const html = generateHtml(initialStore, req);
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
    } else {
      res.header('Content-Type', 'text/html; charset=utf-8');
      res.write(renderFullPage(html, appconfig.version, initialStore));
      res.end();
    }
  });;
});

function createInitialStore(articles: Article[]): Store<any> {
    const createStoreWithMiddleware = applyMiddleware()(createStore);
    const data: any = { data: { articles }};
    return createStoreWithMiddleware(reducers, data);
}

function generateHtml(store: Store<any>, req: any): string {
    return renderToString((
      <Provider store={store} >
        <StaticRouter location={req.url} context={context} >
          <Application />
        </StaticRouter>
      </Provider >
    ));
}

// create server based on application configuration
server = http.createServer(app);

// start the server listening on specified port
server.listen(PORT);

// tslint:disable-next-line:max-line-length
const rollBarScript: string = `!function(r){function e(n){if(o[n])return o[n].exports;var t=o[n]={exports:{},id:n,loaded:!1};return r[n].call(t.exports,t,t.exports,e),t.loaded=!0,t.exports}var o={};return e.m=r,e.c=o,e.p="",e(0)}([function(r,e,o){"use strict";var n=o(1).Rollbar,t=o(2);_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||"https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/1.9.3/rollbar.min.js";var a=n.init(window,_rollbarConfig),i=t(a,_rollbarConfig);a.loadFull(window,document,!_rollbarConfig.async,_rollbarConfig,i)},function(r,e){"use strict";function o(r){return function(){try{return r.apply(this,arguments)}catch(r){try{console.error("[Rollbar]: Internal error",r)}catch(r){}}}}function n(r,e,o){window._rollbarWrappedError&&(o[4]||(o[4]=window._rollbarWrappedError),o[5]||(o[5]=window._rollbarWrappedError._rollbarContext),window._rollbarWrappedError=null),r.uncaughtError.apply(r,o),e&&e.apply(window,o)}function t(r){var e=function(){var e=Array.prototype.slice.call(arguments,0);n(r,r._rollbarOldOnError,e)};return e.belongsToShim=!0,e}function a(r){this.shimId=++c,this.notifier=null,this.parentShim=r,this._rollbarOldOnError=null}function i(r){var e=a;return o(function(){if(this.notifier)return this.notifier[r].apply(this.notifier,arguments);var o=this,n="scope"===r;n&&(o=new e(this));var t=Array.prototype.slice.call(arguments,0),a={shim:o,method:r,args:t,ts:new Date};return window._rollbarShimQueue.push(a),n?o:void 0})}function l(r,e){if(e.hasOwnProperty&&e.hasOwnProperty("addEventListener")){var o=e.addEventListener;e.addEventListener=function(e,n,t){o.call(this,e,r.wrap(n),t)};var n=e.removeEventListener;e.removeEventListener=function(r,e,o){n.call(this,r,e&&e._wrapped?e._wrapped:e,o)}}}var c=0;a.init=function(r,e){var n=e.globalAlias||"Rollbar";if("object"==typeof r[n])return r[n];r._rollbarShimQueue=[],r._rollbarWrappedError=null,e=e||{};var i=new a;return o(function(){if(i.configure(e),e.captureUncaught){i._rollbarOldOnError=r.onerror,r.onerror=t(i);var o,a,c="EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for(o=0;o<c.length;++o)a=c[o],r[a]&&r[a].prototype&&l(i,r[a].prototype)}return e.captureUnhandledRejections&&(i._unhandledRejectionHandler=function(r){var e=r.reason,o=r.promise,n=r.detail;!e&&n&&(e=n.reason,o=n.promise),i.unhandledRejection(e,o)},r.addEventListener("unhandledrejection",i._unhandledRejectionHandler)),r[n]=i,i})()},a.prototype.loadFull=function(r,e,n,t,a){var i=function(){var e;if(void 0===r._rollbarPayloadQueue){var o,n,t,i;for(e=new Error("rollbar.js did not load");o=r._rollbarShimQueue.shift();)for(t=o.args,i=0;i<t.length;++i)if(n=t[i],"function"==typeof n){n(e);break}}"function"==typeof a&&a(e)},l=!1,c=e.createElement("script"),p=e.getElementsByTagName("script")[0],s=p.parentNode;c.crossOrigin="",c.src=t.rollbarJsUrl,c.async=!n,c.onload=c.onreadystatechange=o(function(){if(!(l||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){c.onload=c.onreadystatechange=null;try{s.removeChild(c)}catch(r){}l=!0,i()}}),s.insertBefore(c,p)},a.prototype.wrap=function(r,e){try{var o;if(o="function"==typeof e?e:function(){return e||{}},"function"!=typeof r)return r;if(r._isWrap)return r;if(!r._wrapped){r._wrapped=function(){try{return r.apply(this,arguments)}catch(e){throw"string"==typeof e&&(e=new String(e)),e._rollbarContext=o()||{},e._rollbarContext._wrappedSource=r.toString(),window._rollbarWrappedError=e,e}},r._wrapped._isWrap=!0;for(var n in r)r.hasOwnProperty(n)&&(r._wrapped[n]=r[n])}return r._wrapped}catch(e){return r}};for(var p="log,debug,info,warn,warning,error,critical,global,configure,scope,uncaughtError,unhandledRejection".split(","),s=0;s<p.length;++s)a.prototype[p[s]]=i(p[s]);r.exports={Rollbar:a,_rollbarWindowOnError:n}},function(r,e){"use strict";r.exports=function(r,e){return function(o){if(!o&&!window._rollbarInitialized){var n=window.RollbarNotifier,t=e||{},a=t.globalAlias||"Rollbar",i=window.Rollbar.init(t,r);i._processShimQueue(window._rollbarShimQueue||[]),window[a]=i,window._rollbarInitialized=!0,n.processPayloads()}}}}]);`;

/**
 * Takes a react rendering in string format and returns a full html page.
 *
 * @param {string} html - react component to be rendered
 * @param {string} version - application version from package.json
 * @return {string} full html page
 */
function renderFullPage(html: string, version: string, initialStore: Store<any>) {
  return `
    <!doctype html>
    <html>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <head>
        <title>Dev Sandbox</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link rel="icon" href="https://res.cloudinary.com/dvr87tqip/image/upload/v1492291999/sandbox_xb9z2t.png" type="image/x-icon" />
        <link rel="stylesheet" href="/static/bundle.min.${version}.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/solarized-light.min.css">
      </head>
      <body id="app-body">
        <div id="app-container">${html}</div>
      </body>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(initialStore.getState()).replace(/</g, '\\u003c')}
      </script>
      <script src="/static/bundle.min.${version}.js"></script>
      <style>
        body {
          background-image: URL('https://res.cloudinary.com/dvr87tqip/image/upload/v1492211282/gearbox_cleaned_ijempx.png');
          background-position-y: calc(100vh - 650px);
          background-position-x: 10vw;
          background-repeat: no-repeat;
        }
      </style>
      <script>
        var _rollbarConfig = {
            accessToken: "8a20899de22c45598afcbbc4bcf12dd2",
            captureUncaught: true,
            captureUnhandledRejections: true,
            payload: {
                environment: "production"
            }
        };
        ${rollBarScript}
      </script>
    </html>
  `;
}

