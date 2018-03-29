const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to db');
    }
    console.log('Connected to db');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5ab941bac513921fa0d7d572")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5abd0fbb473b3424382f3165")
    }, {
        $set: {
            text: 'Yo there'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});
