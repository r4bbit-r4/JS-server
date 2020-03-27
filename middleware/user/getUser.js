/*
* Returns the user based on associated session token
* */
module.exports = function(objectrepository) {

    return function(req, res, next) {
        return next();
    };

};