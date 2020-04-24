const express = require('express');
const ejs = require('ejs');
const app = express();
const session = require('express-session')
const bodyparser = require('body-parser');

// Load dependencies
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());
app.set('view engine', 'ejs');
app.use(express.static('static'));

// Handle errors
app.use((err, req, res, next)=> {
    res.end('Bummer ...');
    console.log(err);
});

// Include all the routes
require('./routes/user')(app);
require('./routes/deck')(app);
require('./routes/common')(app);

const server = app.listen(3000, function () {
});