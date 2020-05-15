/*
* Deletes user based on the provided session token
* */
const requireoption = require('../../requireOption');

module.exports = function(objectrepository) {
    // Try loading the UserModel
    const DeckModel = requireoption(objectrepository, 'UserModel');

    return function(req, res, next) {

        // Delete user from db
        res.locals.user.remove();
        req.session.destroy()

        return next();
    };

};