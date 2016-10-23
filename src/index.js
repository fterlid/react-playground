require('babel-register');
require('babel-polyfill');

const SERVER = require('./server/server').default;
const PORT = process.env.PORT || 3000;

SERVER.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});