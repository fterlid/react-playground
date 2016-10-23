require('babel-register');
require('babel-polyfill');

const Server = require('./server/server.jsx').default;
const PORT = process.env.PORT || 3000;

Server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});