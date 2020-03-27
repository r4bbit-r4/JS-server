/*
* If the login credentials are incorrect, redirect to login with error, otherwise continue
* */

module.exports = function(objectrepository) {

    return function(req, res, next) {
        return next();
    };

};