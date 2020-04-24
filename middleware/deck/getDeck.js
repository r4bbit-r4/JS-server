/*
* Returns the decks that match the given search critariea
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the DeckModel
    const DeckModel = requireoption(objectrepository, 'DeckModel');

    return function(req, res, next) {
        // Try loading the deck list
        console.log(req.params.deckid);
        DeckModel.findOne({_id:req.params.deckid}, (err, deck)=> {
            // If there's an error send it
            if (err || !deck) {
                return next(err);
            }
            // Or continue with resultss
            res.locals.deck = deck;

            return next();
        });
    };
};