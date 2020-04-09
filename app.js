const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

/**
 * Include all the routes
 */
require('./routes/user')(app);
require('./routes/deck')(app);
require('./routes/common')(app);

const server = app.listen(3000, function () {
});