/*
 * Tests the getUser middleware completely using chai and mocha
 */
const expect = require("chai").expect;
const getUserMW = require("../../../../middleware/user/getUser");

describe ( " getUser Middleware ", function() {

    // Test for the successful user retrieval flow
    it ( " returns a user from the db, with given name ", function(done) {

        const MW = getUserMW({
            UserModel: {
                findOne: (un, cb)=> {
                    expect(un).to.be.eql({name: 'test'});
                    cb(null, 'mockuser');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        MW({
          body: {
              username: 'test'
          }
        }, resMock, (err) => {

            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({user: 'mockuser'});

            done();
        });
    });

    // Test for the failed retrieval flow
    it ( " redirect to mainpage because if a db problem ", function(done) {

        const MW = getUserMW({
            UserModel: {
                findOne: (un, cb)=> {
                    expect(un).to.be.eql({name: 'test'});
                    cb('dberror', null);
                }
            }
        });

        const resMock = {
            locals: {}
        };

        MW({
            body: {
                username: 'test'
            }
        }, resMock, (err) => {

            expect(err).to.be.eql('dberror');
            done();

        });
    });

    // Test if the user is missing2
    it ( " redirect to mainpage because user was not found ", function(done) {

        const MW = getUserMW({
            UserModel: {
                findOne: (un, cb)=> {
                    expect(un).to.be.eql({name: 'test'});
                    cb(undefined, null);
                }
            }
        });

        const resMock = {
            locals: {}
        };

        MW({
            body: {
                username: 'test'
            }
        }, resMock, (err) => {

            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({});

            done();
        });
    });


});