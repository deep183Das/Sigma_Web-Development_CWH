// function reduces code repitition
// it's actually packaging a block of code 

function nice(name){
    console.log("Hey " + name + ", you are nice!")
}
nice("Deep")
nice("Miss Momo")


function sum(a, b) {
    console.log(a + b)
}
sum(3, 5)


function avg(a, b) {
    return (a + b)/2;
}
console.log("The average of 2 and 22 is : ", avg(2, 22))

    // a and b are compulsory parameters (if not passed then the function will return "NaN"=> Not a Number)
    // "optional parameters" (default-valued parameter) [ here c ]
function val(a, b, c = 5) {
    console.log(a, b, c)
    return (a + b + c)
}

console.log("val1 = ", val(3, 4))       // c = 5 (default parameter)
console.log("val2 = ", val(3, 4, 10))   // c = 10
console.log("val3 = ", val(5))          // "b" will be undefined and the return value will be NaN

    // arrow function (by this we can put the function inside a variable)
const func = (x)=> {
    console.log("I am an arrow function", x)
}

func(2)
func(22)
    // "func" is a variable which is also a function