import React from 'react';
import { Router, Route, hashHistory, match } from 'react-router';
import App from './components';
import Home from './components/home';

export default (
    <Route name="app" component={App} path="/">
        <Route component={Home} path="home" />
    </Route>
);