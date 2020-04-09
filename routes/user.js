/* These routes are responsible for the /user and reated operations */

// Authentication related middlewares
let sessionMW = require("../middleware/auth/session");

// Rendering middlewares
let renderMW = require("../middleware/render/render");

// User handling middlewares
let getUserMW = require("../middleware/user/getUser");
let deleteUserMW = require("../middleware/user/deleteUser");
let updateUserMW = require("../middleware/user/updateUser");

// Deck listing middlewares
let getDeckMW = require("../middleware/deck/getTopDecks");

// Export model to use throughout the defined routes
module.exports = function (app) {
    let objectrepository = {
    };


    /*
    * Define routes below
    * */

    // Get user page, handle session presence, then get user data and render the profile page
    app.get("/user",
            sessionMW(objectrepository),
            getUserMW(objectrepository),
            getDeckMW(objectrepository),
            renderMW(objectrepository,'user')
    );

    // Get user modification page, handle session presence, then get user data and render page
    app.get("/user/edit",
            sessionMW(objectrepository),
            getUserMW(objectrepository),
            renderMW(objectrepository,'updateuser')
    );

    // Post data to modification age, handle session then update the user
    app.post("/user/edit",
            sessionMW(objectrepository),
            getUserMW(objectrepository),
            updateUserMW(objectrepository),
            getDeckMW(objectrepository),
            renderMW(objectrepository,'user')
    );

    // Post data to user removal page, handle session then remove the user
    app.post("/user/del",
            sessionMW(objectrepository),
            getUserMW(objectrepository),
            deleteUserMW(objectrepository),
            getDeckMW(objectrepository),
            renderMW(objectrepository, 'user')
    );

};