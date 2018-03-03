const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call spy correctly', () => {
        var spy = expect.createSpy();
        // spy();
        spy('Minaam', 24);
        expect(spy).toHaveBeenCalled('Minaam', 24);
    });

    it('should call saveUser with the user object', () => {
        var email = 'minfas@gmail.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});
