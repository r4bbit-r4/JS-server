/*
 * Tests the loadIndex middleware completely using chai and mocha
 */
const expect = require("chai").expect;
const loadIndexMW = require("../../../../middleware/auth/loadindex");

describe ( " loadIndex Middleware ", function() {

    // Test for a user who's logged out
    it ( " populate res.locals if req.session has a user who's logged in ", function(done) {

        const MW = loadIndexMW({});

        const resMock = {
            locals: {}
        };

        MW({
            session: {
                loggedin: true,
                user: "test"
            }
        }, resMock, (err) => {

            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({
                loggedin: true,
                user: 'test',
            });

            done();
        });
    });

    // Test for a user who's logged out
    it ( " don't populate res.locals if req.session has a use who's logged out ", function(done) {

        const MW = loadIndexMW({});

        const resMock = {
            locals: {}
        };

        MW({
            session: {
                loggedin: false,
                user: "test"
            }
        }, resMock, (err) => {

            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({});

            done();
        });
    });

    // Test for a request without a session
    it ( " don't populate res.locals if there is no session associated with the request ", function(done) {

        const MW = loadIndexMW({});

        const resMock = {
            locals: {}
        };

        MW({}, resMock, (err) => {

            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({});

            done();
        });
    });


});