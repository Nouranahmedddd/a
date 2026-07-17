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

let numbers = [1, 2, 3, 4, 5];

checkSorted(numbers);