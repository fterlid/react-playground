import Express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { RouterContext, match } from 'react-router'
import Routes from '../shared/routes';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../shared/reducers';
import { applyMiddleware } from 'redux';
import promiseMiddleware   from 'lib/promiseMiddleware';

const app = Express();

app.use((request, response) => {
    const reducer = combineReducers(reducers);
    const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

    match({
        routes: Routes,
        location: request.url
    }, (error, redirectLocation, renderProps) => {
        if (error) {
            console.error(error);
            return response
                .status(500)
                .send(error.message)
        }

        if (!renderProps) {
            return response
                .status(404)
                .send("Not found");
        }

        const initialComponent = (
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        );

        const componentHtml = ReactDomServer.renderToString(initialComponent);
        const initialState = store.getState();
        const html =
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Isomorphic React</title>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
    </head>
    <body>
        <h1>Hello, world</h1>
        <div id="app-container">
            ${componentHtml}
        </div>
        <script src="http://localhost:8080/app.bundle.js"></script>
    </body>
</html>`;

        return response
            .status(200)
            .send(html);
    });
});

export default app;