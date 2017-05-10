
require('antd/dist/antd.less');
require('bootstrap/less/bootstrap.less');


require('./styles/less/index.less');
require('bootstrap/dist/js/npm');


// import 'core-js/fn/object/assign';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, Route, Link, hashHistory  } from 'react-router';
import stores from './stores/index';
import routes from './routes.jsx';
import global from './common/global';


// Render
//const history = syncHistoryWithStore(hashHistory, store);

const rootEl =document.getElementById('app');

window.$=$;
ReactDom.render(
    <Provider {...stores}>
      <Router routes={routes}  history={hashHistory}/>
    </Provider>
     , rootEl);
