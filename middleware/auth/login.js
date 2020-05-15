/*
* If the login credentials are incorrect, redirect to login with error, otherwise continue
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the UserModel
    const UserModel = requireoption(objectrepository, 'UserModel');

    return function(req, res, next) {

        UserModel.findOne({name:req.body.username, password: req.body.password}, (err, user) => {

            if (err || !user || !req.body.username || !req.body.password) {
                res.redirect("/login/uerror");
            }

            // Set locals
            res.locals.user = user;

            // Update session
            req.session.user = user;
            req.session.loggedin = true;
            req.session.save();

            return next();
        });
    };
};