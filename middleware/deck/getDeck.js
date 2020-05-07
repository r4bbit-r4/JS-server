/*
* Returns the decks that match the given search critariea
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the DeckModel
    const DeckModel = requireoption(objectrepository, 'DeckModel');

    return function(req, res, next) {
        // Try loading the deck list
        DeckModel.findOne({_id: req.params.deckid}, (err, deck)=> {
            // If there's an error send it
            if (err || !deck) {
                return next(err);
            }
            // Or continue with results
            res.locals.deck = deck;

            return next();
        });
    };
};