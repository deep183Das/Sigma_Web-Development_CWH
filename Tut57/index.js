console.log("I am a tutorial on loops")

let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)

// to do our repititive tasks, loops are used
/*
5 types of loops in JS
    for loop 
    for in loop
    for of loop
    while loop
    do while loop

*/  // for each loop

// for loop
let i = 10;
for (let j = 0; j < i; j++) {
    console.log(j)
}

// for in loop  : gives us the keys of an object
let obj = {
    name: "Deepanjhan",
    role: "Programmer",
    "company": "AI"
}

for (const key in obj) {
    console.log(key)
}

// for of loop  : used for an interable data structure (e.g. string, array)
    // using the example of string now
for (const c of "DEEP") {   // each character will be printed
    console.log(c);
}

// while loop
let s = 5;
while (s < 10){
    console.log(s);
    s++;
}

// do while loop (will run at least once)
let t = 5;
do {
    console.log(t);
    t++;
} while(t < 5)
