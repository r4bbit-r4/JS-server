/*
* Returns the top few decks from the available, right now it only
* returns all the decks added to the database so far
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the DeckModel
    const DeckModel = requireoption(objectrepository, 'DeckModel');

    return function(req, res, next) {
        // Try loading the deck list
        DeckModel.find({}, (err, decklist)=> {
            // If there's an error send it
            if (err) {
                return next(err);
            }
            // Or continue with results
            res.locals.decklist = decklist;
            return next();
        });
    };
};