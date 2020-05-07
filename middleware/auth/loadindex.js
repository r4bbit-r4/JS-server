/*
* If the request to the indexpage contains a session belonging to a logged in user
* set local vas to replace login button with profile one, the session middleware cannot be
* used here as it would create an infinite loop by calling itself when redirectin to "/"
* */
const requireoption = require('../../requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {

        if (req.session) {

            if (req.session.loggedin !== 'undefined' && req.session.loggedin === true ) {
                res.locals.loggedin = true;
                res.locals.user = req.session.user;
            }
        }

        return next();
    };
};