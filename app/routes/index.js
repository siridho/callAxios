const app = module.exports = require('express')();

app.get('/', async (req, res) => {
    res.status(200).json({
        code: 200,
        status: 'success',
        message: 'Welcome to the beginning of nothingness'
    });
});

app.use('/', require('./movie')); // user routes