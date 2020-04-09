/*
* Renders the given html page with the supplied data
* */
module.exports = function(objectrepository, viewName) {
    
    return function(req, res) {
        res.render(viewName);
    };

};