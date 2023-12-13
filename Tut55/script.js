console.log("Hey this is tutorial 2 of JS (Tut55 of Sigma Web Development Course)")


    // creating variables  
var a = 5;
var b = 6;
    // JS automatically understands which type of variable to deal with
console.log(a + b + 6)

    // string (collection of characters)
var c = "Deepanjhan"

    // to find the type of data
console.log(typeof a, typeof b, typeof c)

    //  a variable name can start with letter/underscore/dollar not with digits and variable names are case-sensitive
var $deep = 5;
var _name = "Deep"
// var 5val = 7;    // not allowed

    // "var" globally scoped and "let" and "const" block-scoped
const m = 6;    // this value can not be changed
// m = 7;   // not allowed
// m = m + 1;  // not allowed

    // use "let" to define variables
let n = 60;
{
    let n = 20;
    console.log(n);
    // first it will check for any local block-level value, if not found then it will go for the global level value
}
console.log(n)

var p = 100;
{
    var p = 101;
    console.log(p);
}
console.log(p);

let r = 20;
{
    let r = 25;
    {
        console.log(r)
        // it will look for the just one-step ahead parent value, if not found then only out of that
    }
    console.log(r)
}
console.log(r)


    // primitive data-types and user-defined data types(object)
    // primitive -> number, bigint, null(type = object), undefined, symbol, string, boolean
let x = "Harry Bhai"
let y = 22;
let z = 3.55;
let h = true;
let j = undefined;
let k = null;   // type "object"
// "symbol" primitive data type will be discussed later

console.log(x, y, z, h, j, k);
console.log(typeof x, typeof y, typeof z, typeof h, typeof j, typeof k);


    // object : key-value pairs
let obj = {
    name : "Deepanjhan Das",
    "job role" : 5600,
    "is_handsome" : true
}
console.log(obj)
    // in order to add some new key-value pairs
obj.salary = "100 crores"
console.log(obj)
    // we can alter the values
obj.salary = "500 crores"
console.log(obj) 
    // the value can be "primitive data type" / another "object" / a "function" itself