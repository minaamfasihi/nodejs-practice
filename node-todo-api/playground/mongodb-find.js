const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to db');
    }
    console.log('Connected to db');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ab93e553364ec19c422f2d3')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //     db.close();
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    //     db.close();
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({ name: 'Munnu' }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });
});
