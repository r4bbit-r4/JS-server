/* These routes are responsible for the /user and reated operations */

// Authentication related middlewares
let sessionMW = require("../middleware/auth/session");
let authMW = require("../middleware/auth/auth")

// Rendering middlewares
let renderMW = require("../middleware/render/render")

// User handling middlewares
let getUserMW = require("../middleware/user/getUser");
let createUserMW = require("../middleware/user/createUser");
let getDeckMW = require("../middleware/deck/getTopDecks")


// Export model to use throughout the defined routes
module.exports = function (app) {
    let objectrepository = {
    };


    /*
    * Define routes below
    * */

    // Get main page, if the session token is present get user data and render page accordingly, get top decks anyways
    app.get("/",
        getDeckMW(objectrepository),
        sessionMW(objectrepository),
        getUserMW(objectrepository),
        renderMW(objectrepository, 'index')
    );

    // Get login form, simply render it
    app.get("/login",
            renderMW(objectrepository, 'login')
    );

    // Post to login form, check provided data and render user page if correct or login page with error instead
    app.post("/login",
            authMW(objectrepository),
            getUserMW(objectrepository),
            renderMW(objectrepository,'user')
    );

    // Get registration form, simply render it
    app.get("/register",
            renderMW(objectrepository,'register')
    );

    // Post data to registration form, this will create the new user then redirect to the login page
    app.post("/register",
            createUserMW(objectrepository),
            renderMW(objectrepository, 'login')
    );

};