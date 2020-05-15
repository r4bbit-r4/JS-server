/* These routes are responsible for the /user and reated operations */

// Authentication related middlewares
let loadindexMW = require("../middleware/auth/loadindex");
let authMW = require("../middleware/auth/login")
let logoutMW = require("../middleware/auth/logout")

// Rendering middlewares
let renderMW = require("../middleware/render/render")

// User handling middlewares
let getUserMW = require("../middleware/user/getUser");
let createUserMW = require("../middleware/user/createUser");
let updateUserMW = require("../middleware/user/updateUser");

// Deck handling
let getDeckMW = require("../middleware/deck/getTopDecks");

// Load user and deck models
const UserModel = require('../models/user');
const DeckModel = require('../models/deck');

// Export model to use throughout the defined routes
module.exports = function (app) {
    let objectrepository = {
        UserModel: UserModel,
        DeckModel: DeckModel
    };

    /*
    * Define routes below
    * */

    // Get main page, if the session token is present get user data and render page accordingly, get top decks anyways
    app.get("/",
        getDeckMW(objectrepository),
        loadindexMW(objectrepository),
        renderMW(objectrepository, 'index')
    );

    // Logout mw, logs user out hten redirects
    app.get("/logout",
        logoutMW(objectrepository),
        renderMW(objectrepository, 'login')
    );

    // Get login form, simply render it
    app.get("/login",
        renderMW(objectrepository, 'login')
    );

    // Get login form with a message
    app.get("/login/:message",
        renderMW(objectrepository,'login')
    );

    // Post to login form, check provided data and render user page if correct or login page with error instead
    app.post("/login",
            authMW(objectrepository),
            getDeckMW(objectrepository),
            renderMW(objectrepository,'user')
    );

    // Get registration form, simply render it
    app.get("/register",
            renderMW(objectrepository,'register')
    );

    // Post data to registration form, this will create the new user then redirect to the login page
    app.post("/register",
            createUserMW(objectrepository),
            renderMW(objectrepository, "login")
    );

    // Send password reset email
    app.get("/send_reset",
        renderMW(objectrepository, 'send_reset')
    );

    // Get password reset page
    app.get("/reset",
            renderMW(objectrepository, 'reset')
    );

    // Reset password for user
    app.post("/reset",
        getUserMW(objectrepository),
        updateUserMW(objectrepository),
        renderMW(objectrepository, 'login')
    );

};