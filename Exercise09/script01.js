/*
    Create a faulty calculator using JavaScript 

    This faulty calculator does following :
    1. It takes two numbers as input from the user
    2. It performs wrong operations as follows :
        + ---> -
        * ---> +
        - ---> /
        / ---> **

    It performs wrong operation 10% of the times ( prob <= 0.1 times )
*/

console.log("Available operations are \"+\", \"-\", \"*\", \"/\"");

let c = "y";

while(c == "y")
{
    let op = prompt("Which operations do u want to perform ?: ")
    
    let a = Number(prompt("Enter the first number : "));
    let b = Number(prompt("Enter the second number : "));
    
    let p = Math.random()
    console.log("The random number is = ", p)

    if(p <= 0.1){   // then it performs the faulty calculations
        if(op == "+"){ console.log(a - b) }
        else if(op == "-"){ console.log(a / b) }
        else if(op == "*"){ console.log(a + b) }
        else if(op == "/"){ console.log(a ** b) }
        else{
            console.log("Please choose from the available operations only!")
        }
    } else{
        if(op == "+"){ console.log(a + b) }
        else if(op == "-"){ console.log(a - b) }
        else if(op == "*"){ console.log(a * b) }
        else if(op == "/"){ console.log(a / b) }
        else{
            console.log("Please choose from the available operations only!")
        }
    }

    c = prompt("Do you want to use again ?(y/n) : ")
}
console.log("Thank you for using it !")
