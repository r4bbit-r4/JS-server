/*
* Returns the user based on associated session token
* */
module.exports = function(objectrepository) {

    return function(req, res, next) {

        res.locals.loggedin = true;

        res.locals.name = "teszt";
        res.locals.address = "teszt@teszt.com";
        res.locals.password = "teszt";

        return next();
    };

};