import React from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from '../shared/routes';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../shared/reducers';
import { fromJS } from 'immutable';
import { applyMiddleware } from 'redux';
import promiseMiddleware   from '../shared/lib/promiseMiddleware';

let initialState = window.__INITIAL_STATE__;

// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
    .keys(initialState)
    .forEach(key => {
        initialState[key] = fromJS(initialState[key]);
    });

const reducer = combineReducers(reducers);
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

ReactDom.render(
    <Provider store={store}>
        <div>
            <h2>Hello</h2>
            <Router history={hashHistory} routes={routes} />
        </div>
    </Provider>,
    document.getElementById('app-container')
);
