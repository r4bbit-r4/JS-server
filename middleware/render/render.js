/*
* Renders the given html page with the supplied data
* */
module.exports = function(objectrepository, viewName) {
    
    return function(req, res, message) {

        if (req.params.message === 'uerror') {
            res.locals.message = "User not found";
        }
        if (req.params.message === 'rsuccess') {
            res.locals.message = "Registration successful";
        }
        if (req.params.message === 'rerror') {
            res.locals.message = "Registration unsuccessful";
        }

        res.render(viewName);
    };

};