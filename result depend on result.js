function calculateSquare(num) {
    return num * num;
}

function printSquare(num) {
    let result = calculateSquare(num);

    console.log("Input Number = " + num);
    console.log("Calculation = " + num + " × " + num);
    console.log("Square = " + result);
}

printSquare(6);