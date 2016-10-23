import Express from 'express';

const app = Express();

app.use((request, response) => {
    const html =
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Isomorphic React</title>
    </head>
    <body>
        <h1>Hello, world</h1>
    </body>
</html>`;

    response.end(html);
});

export default app;