const app = module.exports = require('express')();

app.use('/', require('./movie')); // user routes