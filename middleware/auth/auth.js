/*
* If the login credentials are incorrect, redirect to login with error, otherwise continue
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the UserModel
    const UserModel = requireoption(objectrepository, 'UserModel');

    return function(req, res, next) {
        // Try loading the deck list
        console.log(req.body);
        UserModel.findOne({name:req.body.username, password: req.body.password}, (err, user)=> {
            // If there's an error send it and print the error to a message
            if (err || !user || !req.body.username || !req.body.password) {
                res.redirect("/login/uerror");
            }
            // Or continue with results
            res.locals.user = user;
            res.locals.loggedin = true;

            return next();
        });
    };
};