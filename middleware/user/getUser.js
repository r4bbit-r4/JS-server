/*
* Returns the user based on associated session token
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the UserModel
    const DeckModel = requireoption(objectrepository, 'UserModel');

    return function(req, res, next) {
        // Try loading the deck list
        DeckModel.findOne({_id:req.params.userid}, (err, user)=> {
            // If there's an error send it
            if (err || !user) {
                return next(err);
            }
            // Or continue with resultss
            res.locals.user = user;
            return next();
        });
    };
};