let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /):");

let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Cannot divide by zero!";
    }
} else {
    result = "Invalid operation!";
}

console.log("Result = " + result);