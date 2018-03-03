const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(20, 11);
            expect(res).toBe(31).toBeA('number');
            // if (res !== 31) {
            //     throw new Error(`Expected 31, but got ${res}`);
            // }
            // throw new Error('Value not correct');
        });
    });

    it('should square a number', () => {
        var res = utils.square(3);
        // if (res !== 9) {
        //     throw new Error(`Expected 9, but got ${res}`);
        // }
        expect(res).toBe(9).toBeA('number');
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(5, 4, (sum) => {
            expect(sum).toBe(9).toBeA('number');
            done();
        });
    });

    it('should async square a number', (done) => { // done is used for testing async code. done is called after the callback is executed
        utils.asyncSquare(3, (res) => {
            expect(res).toBe(9).toBeA('number');
            done();
        });
    });
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Minaam'}).toBe({name: 'Minaam'}); // toBe checks whether they are the SAME objects
//     // expect({name: 'Minaam'}).toEqual({name: 'Minaam'}); // solves the above issue
//     // expect([2, 3, 4]).toInclude(3); //checks if the array has 3
//     // expect([2, 3, 4]).toExclude(1); //checks if the array doesnt have 3
//     expect({
//         name: 'Minaam',
//         age: 23,
//         location: 'Canada'
//     }).toInclude({
//         age: 23
//     });
// });

it('should set first name and last name', () => {
    var user = {
        location: 'Canada',
        age: 25
    };
    var res = utils.setName(user, 'Minaam Fasihi'); //objects are passed by reference
    // expect(res).toEqual(user); // this test case passes because of the above reason
    expect(res.firstName).toInclude('Minaam');
    expect(res.lastName).toInclude('Fasihi');
});
