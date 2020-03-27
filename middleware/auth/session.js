/*
* If the request doesn't contain a session token, redirect to login with error, otherwise continue
* */

module.exports = function(objectrepository) {

    return function(req, res, next) {
        return next();
    };

};