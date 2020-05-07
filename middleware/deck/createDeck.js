/*
* Creates a new deck with the given data, adds it to the user with the provided session token
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the DeckModel
    const DeckModel = requireoption(objectrepository, 'DeckModel');

    return function(req, res, next) {

        // Set up new deck object via posted data
        let NewDeck = DeckModel();
        NewDeck.title = req.body.title;
        NewDeck.creator = req.body.creator;
        NewDeck.content = req.body.content;
        NewDeck.save();

        return next()
    };
};