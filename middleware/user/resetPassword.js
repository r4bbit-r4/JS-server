/*
* Updates the users password if needed
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the UserModel
    const DeckModel = requireoption(objectrepository, 'UserModel');

    return function(req, res, next) {

        // Update user with given data
        if ( res.locals.user === 'undefined' ||
            req.body.password1 === 'undefined' ||
            req.body.password2 === 'undefined' ) {

            res.redirect("/");
        }

        res.locals.user.password = req.body.password1;
        res.locals.user.save()

        req.session.user = res.locals.user;

        return next();
    };

};