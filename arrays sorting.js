function checkSorted(array) {

    let sorted = true;

    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] > array[i + 1]) {
            sorted = false;
            break;
        }

    }

    if (sorted) {
        console.log("Array is Sorted");
    } else {
        console.log("Array is Not Sorted");
    }

}

let size = Number(prompt("Enter Array Size:"));

let numbers = [];

for (let i = 0; i < size; i++) {

    numbers[i] = Number(prompt("Enter Number " + (i + 1)));

}

checkSorted(numbers);