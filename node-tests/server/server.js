const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Minaam',
        age: 24
    }, {
        name: 'Sam',
        age: 23
    }, {
        name: 'Khyzer',
        age: 24
    }]);
});

app.listen(3000);
module.exports.app = app;
