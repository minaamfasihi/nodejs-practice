// This is the statement expression
// var square = (x) => {
//     var result = x * x;
//     return result;
// };

// This is the expression syntax
// var square = (x) => x * x;

// In case of one argument, you can leave out the paranthesis
var square = x => x * x;

console.log(square(7));

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments); // arguments array not accessible here
        console.log(`Hi. I'm ${this.name}`); // this wont work. the this keyword doesnt get bound in the arrow functions
    },
    sayHiAlt() {
        console.log(arguments); // accessible here
        console.log(`Hi. I'm ${this.name}`); // this works because it's a regular function
    }
};

user.sayHiAlt();
