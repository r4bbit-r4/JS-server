/*
* Returns the user based on associated session token
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the UserModel
    const DeckModel = requireoption(objectrepository, 'UserModel');

    return function(req, res, next) {
        // Try loading the deck list
        DeckModel.findOne({name: req.body.username}, (err, user)=> {
            // If there's an error send it
            if (err || user === 'undefined') {
                res.redirect("/");
            }
            // Or continue with results
            res.locals.user = user;
            console.log(user.name);

            return next();
        });
    };
};