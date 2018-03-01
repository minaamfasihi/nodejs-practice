const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public')); //__dirname has the path of our current working directory

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Minaam',
        likes: [
            'Biking',
            'Cities'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Server is up and running');
});
