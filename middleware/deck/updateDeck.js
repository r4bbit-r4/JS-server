/*
* Updates a deck with the provided data
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the DeckModel
    const DeckModel = requireoption(objectrepository, 'DeckModel');

    return function(req, res, next) {
        // Update data with posted data
        res.locals.deck.title = req.body.title;
        res.locals.deck.content = req.body.content;
        res.locals.deck.creator = req.body.creator;
        res.locals.deck.save();

        res.redirect("/user");
    };
};