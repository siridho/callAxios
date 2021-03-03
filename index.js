const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./app/routes');
const fileUpload = require('express-fileupload');

const port = process.env.PORT || 3000;
const app = express();

dotenv.config(); // passing data from .env file

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json({
    type: 'application/json'
}));
app.use(fileUpload());
// enable cors
app.use(cors());

app.use(routes); // read routes from index.js file

const server = app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

module.exports = server;