var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    };
    callback(user);
};

var getUser2 = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    };
    setTimeout(() => {
        console.log(user);
    }, 3000);
};

getUser(12, (user) => {
    console.log(user);
});
