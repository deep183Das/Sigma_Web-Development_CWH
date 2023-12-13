// Types of functions in JS

    // normal function
function add(a, b){
    console.log("This is a normal function definition");
    return (a + b);
}
console.log(add(5,3));

    // anonymous function   (doesn't have any name and we can store it in a variable)
const func = function (x, y){
    console.log("This is an anonymous function");
    return (x + y);
}
console.log(func(10, 5));   // calling the function using variable

    // arrow function       (we don't even have to use the "function" keyword)
const myFunc = ()=> {
    console.log("This is an arrow function");
}
myFunc();