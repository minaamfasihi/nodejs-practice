const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

/* app.use is how you use middleware
*/

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to log');
        }
    });
    next();
});

app.use((req, res, next) => {
    res.render(__dirname + '/views/maintenance.hbs');
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.use(express.static(__dirname + '/public')); //__dirname has the path of our current working directory

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    // res.send({
    //     name: 'Minaam',
    //     likes: [
    //         'Biking',
    //         'Cities'
    //     ]
    // });
    res.render(__dirname + '/views/home.hbs', {
        pageTitle: 'Home page. Welcome',
        message: 'Welcome to my home page',
    });
});

app.get('/about', (req, res) => {
    // res.send('About Page');
    res.render(__dirname + '/views/about.hbs', {
        pageTitle: 'About page',
        message: 'Welcome to about page'
    });
});

app.listen(3000, () => {
    console.log('Server is up and running');
});
