function greaterThanValue(array, value) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] > value) {
            console.log(array[i]);
        }

    }

}

let size = Number(prompt("Enter Array Size"));

let numbers = [];

for (let i = 0; i < size; i++) {

    numbers[i] = Number(prompt("Enter Number " + (i + 1)));

}

let value = Number(prompt("Enter Value"));

console.log("Numbers Greater Than " + value + ":");

greaterThanValue(numbers, value);