/*
* Deletes the deck associated with the given ID
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the DeckModel
    const DeckModel = requireoption(objectrepository, 'DeckModel');

    return function(req, res, next) {

        // Remove deck object
        res.locals.deck.remove((err)=> {
            return next(err);
        });

        res.redirect("/user");
    };

};