function loadData(callback) {
    console.log("Loading data...");

    setTimeout(() => {
        console.log("Data loaded successfully!");
        callback();
    }, 3000);
}

function showData() {
    console.log("Displaying data...");
}

loadData(showData);