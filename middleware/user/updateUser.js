/*
* Updates the user based on the associated token and given data
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the UserModel
    const DeckModel = requireoption(objectrepository, 'UserModel');

    return function(req, res, next) {

        // Update user with given data
        if ( res.locals.user !== 'undefined') {
            res.locals.user.name = req.body.name;
            res.locals.user.address = req.body.email;
            res.locals.user.password = req.body.name;
            res.locals.user.save();
        }

        console.log(res.locals.user);

        return next();
    };

};