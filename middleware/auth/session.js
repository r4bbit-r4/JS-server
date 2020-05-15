/*
* If the request doesn't contain a session token, redirect to index, else get the user from the db
* */
const requireoption = require('../../requireOption');

module.exports = function (objectrepository) {
    // Try loading the UserModel
    const UserModel = requireoption(objectrepository, 'UserModel');

    return function (req, res, next) {

        if (req.session === 'undefined' ||
            req.session.loggedin === false ||
            req.session.user === 'undefined' ) {
            res.redirect("/");
        }

        UserModel.findOne({name:req.session.user.name}, (err, user) => {

            if (err || !user || !req.session.user) {
                res.redirect("/login/uerror");
            }

            // Set locals
            res.locals.user = user;

            return next();
        });
    };

};