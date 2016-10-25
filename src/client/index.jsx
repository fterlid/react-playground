import React from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from '../shared/routes';

ReactDom.render(
    <div><h2>Hello</h2><Router history={hashHistory} routes={routes} /></div>,
    document.getElementById('app-container')
);
