const db = require('./db');

module.exports.handleSignup = (email, password) => {
    db.saveUser({email, password});
    /*
    This is another way to do it but if the property name and value is same then we can use the above ES6 syntax
    db.saveUser({
        email: email,
        password: password
    });
    */
};
