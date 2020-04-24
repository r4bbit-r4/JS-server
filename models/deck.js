/*
* DB model representing one deck, it has a creator
* a title, and a content, all of which are stored as
* strings
* */

const Schema =  require('mongoose').Schema;
const db = require('../config/db');

const Deck = db.model('Deck', {
    title: String,
    creator: String,
    content: String,
    _owner: {
        type: Schema.Types.ObjectID,
        ref: 'User'
    }
});

module.exports = Deck;