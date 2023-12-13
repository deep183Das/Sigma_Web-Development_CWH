console.log("This is string tutorial")

let a = "Deep";
console.log(a)

    // accessing the characters
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])   // will show "undefined"

console.log(a.charAt(0))    // same as a[0]
console.log(a.charAt(110))  // it will give blank

// JS is really a forgiving language. It tries to throw as less error as possible and it is by design like this

    // length of the string
console.log(a.length)

    // template literals (use of ``(backtics))
let real_name = "Deep"
let partner = "Momo"
// instead of writing
console.log("My name is " + real_name + " and my partner is miss " + partner)
// use
console.log(`My name is ${real_name} and my partner is miss ${partner}`)
// when we use variables inside string, that's called string interpolation

    // escape sequence character \" etc
let name_1 = `Mike"s`
console.log(name_1)
let name_2 = "Mike\"s"
console.log(name_2)

    // String methods
let b = "Deepanjhan"
console.log(b.length)           // property (not a function)
console.log(b)                  // strings are immutable
console.log(b.toUpperCase())    // a function, so use brackets ()   --> returns a new string, original string remains same
console.log(b)
console.log(b.toLowerCase())

// string slicing
console.log(b.slice(1, 5))  // 1 included but 5 is not
console.log(b.slice(1))     // 1th index to the end

console.log(b.replace("e", "20"))   // only the first occurance will be replaced

// concatenation
console.log(name_1.concat(" ", name_2, " ", b, " Das"))

// to remove white-spaces [from the starting and from end]
let name_3 = "  Harry     Bhai   "
console.log(name_3.trim())

console.log(b.charAt(3))
console.log(b.indexOf("ee"))    // 1
console.log(b.indexOf("ch"))    // -1 (if no available in the string)

console.log(b.startsWith("Dee"))
console.log(b.endsWith("an"))
