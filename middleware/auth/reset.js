/*
* Sends a reset email in case we forgot our password
* */

module.exports = function(objectrepository) {

    return function(req, res, next) {
        return next();
    };

};