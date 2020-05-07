/*
* If the use wants to log in do it, if it results in error, redirect him back to his own user page
* */
module.exports = function(objectrepository) {
    return function(req, res, next) {
        req.session.destroy((err)=> {
           res.redirect("/user")
        });
    }
}