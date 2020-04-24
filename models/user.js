/*
* DB model representing one use, it has a name
* an email address and a password, all of which are
* strings
* */

const Schema =  require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('User', {
    name: String,
    address: String,
    password: String,
});

module.exports = User;