const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to db');
    }
    console.log('Connected to db');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat the lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'Something to do' }).then((result) => {
        // console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Andrew'});

    db.collection('Todos').findOneAndDelete({
        _id: new ObjectID("5ab9416dbe191619401ace88")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
});
