/*
* Creates the user based on the provided data
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the UserModel
    const UserModel = requireoption(objectrepository, 'UserModel');

    return function(req, res, next) {
        if (req.body.username === 'undefined' ||
            req.body.email === 'undefined' ||
            req.body.password1 === 'undefined' ||
            req.body.password2 === 'undefined') {

            res.redirect('/login/rerror')
        }

        // Create new user based on input data
        let NewUser = UserModel();
        NewUser.name = req.body.username;
        NewUser.address = req.body.email;
        NewUser.password = req.body.password2;
        NewUser.save();

        res.redirect('/login/rsuccess')
    };

};