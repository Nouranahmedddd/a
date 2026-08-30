function secondFunction() {
    console.log("Step 2: Inside second function");
}

function firstFunction() {
    console.log("Step 1: Inside first function");
    secondFunction();
    console.log("Step 3: Back to first function");
}

firstFunction();