console.log("Hello I am conditional tutorial")
// semicolon in JS is optional

let age = 45;   // block scoped variable

    // "if - else if - else" ladder
if(age > 18){   // "if" block
    console.log("You can drive")
}
else if(age == 0) {
    console.log("Are u kidding!")
}
else{   // "else" block
    console.log("You can not drive")
}


// operators
let a = 5;
let b = 2;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a ** b) // exponential
console.log(a % b)  // modulo
    // increment operator 
console.log(a++)    // 5 and then "a" becomes 6
console.log(++a)    // 7 


// JS is value-comparing case 

    // "==" equal to (value)
console.log("3" == 3)   // will give "true" as both of them have same value

    // "===" equal value and type
console.log("3" === 3)  // "triple equals to" checks the type and value both

    // "!=" not equal to
console.log(3 != "3")
console.log(3 != 4)

    // "!==" not equal value or not equal type
console.log(3 !== "3")


    // ternary operator "?"
let m = 10;
let n = 5;
let ans = ((m >= n) ? (m+n) : (m-n));
console.log(ans)

    // eg
let x = 6;
let y = 8;
let val = x > y ? (x - y) : (x + y);

/*
    translates to:
if(x > y){
    let val = x - y;
}
else {
    let val = x + y;
}
*/
