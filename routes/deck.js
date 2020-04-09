/* These routes are responsible for the /deck endpoint and related operations */

// Authentication related middlewares
let sessionMW = require("../middleware/auth/session");

// Rendering middlewares
let renderMW = require("../middleware/render/render");

// User handling middlewares
let createDeckMW = require("../middleware/deck/createDeck")
let getDeckMW = require("../middleware/deck/getDeck");
let deleteDeckMW = require("../middleware/deck/deleteDeck");
let updateDeckMW = require("../middleware/deck/updateDeck");


// Export model to use throughout the defined routes
module.exports = function (app) {
    let objectrepository = {
    };


    /*
    * Define routes below
    * */

    // Get decks from database
    app.get("/deck",
        getDeckMW(objectrepository),
    );


    // Get deck modification page, handle session presence, then get deck data and render page
    app.get("/deck/edit",
            sessionMW(objectrepository),
            getDeckMW(objectrepository),
            renderMW(objectrepository,'updatedeck')
    );

    // Post data to modification age, handle session then update the deck
    app.post("/deck/edit",
            sessionMW(objectrepository),
            getDeckMW(objectrepository),
            updateDeckMW(objectrepository),
            renderMW(objectrepository,'user')
    );

    // Post data to deck removal page, handle session then remove the deck, then redirect back to user home
    app.post("/deck/del",
            sessionMW(objectrepository),
            getDeckMW(objectrepository),
            deleteDeckMW(objectrepository),
            renderMW(objectrepository,'user')
    );

    // Post data to deck creation page
    app.post("/deck/create",
            sessionMW(objectrepository),
            createDeckMW(objectrepository),
            renderMW(objectrepository,'user')
    );

};