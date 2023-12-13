/*  Only 10% of the time    (Solution by Harry Bhai)
    + ---> -
    * ---> +
    - ---> /
    / ---> **
*/

let random = Math.random()

let a = prompt("Enter the first number : ")
let b = prompt("Enter the second number : ")
let c = prompt("Enter operation : ")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if (random > 0.1) {
    // Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}