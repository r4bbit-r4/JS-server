/*
* If the request doesn't contain a session token, redirect to index, else get the user from the db
* */
const requireoption = require('../../requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {

        if ( req.session === 'undefined' || req.session.loggedin === false ) {
            res.redirect("/");
        }

        return next();
    };

};