/*
* Returns the user based on associated session token
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the UserModel
    const UserModel = requireoption(objectrepository, 'UserModel');

    return function(req, res, next) {
        // Try loading the deck list
        UserModel.findOne({name: req.body.username}, (err, user)=> {
            // If there's an error, redirect to index page
            if (err || !user ) {
                return next(err);
            }
            // Or continue with results
            res.locals.user = user;

            return next();
        });
    };
};