// var somePromise = new Promise((resolve, reject) => { // promises are in pending state and when either resolve/reject occurs are they settled
//     setTimeout(() => {
//         // resolve('Chal gaya');
//         reject('Phans gaya'); // can only do either reject or resolve
//     }, 2500);
// });

// somePromise.then((msg) => {
//     console.log('Success: ', msg);
// }, (errorMsg) => {
//     console.log('Error: ', errorMsg);
// });

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Operands must be of type number');
            }
        }, 1500);
    });
};

/* One problem with below approach is that if the first promise is rejected, then the second promise is resolved because it assumes that the rejected promise has been handled successfully.
*/

asyncAdd(3, 4).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, '5');
}, (errorMsg) => {
    console.log(errorMsg);
}).then((res) => {
    console.log('Should be 12: ', res);
}, (emsg) => {
    console.log(emsg);
});


/* Solution to above problem is:
*/

asyncAdd(5, '7').then((res) => {
    console.log("Result: ", res);
    return asyncAdd(10, res);
}).then((res) => {
    console.log('Should be: ', res);
}).catch((errorMsg) => {
    console.log(errorMsg);
});
