var express = require('express');
var app = express();

/**
 * Include all the routes
 */
require('./routes/user')(app);
require('./routes/deck')(app);
require('./routes/common')(app);

app.use(express.static('static'));

var server = app.listen(3000, function () {
});