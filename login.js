function login(username, password, callback) {
    console.log("Checking login...");

    setTimeout(() => {
        if (username === "admin" && password === "1234") {
            console.log("Login successful!");
            callback();
        } else {
            console.log("Login failed!");
        }
    }, 2000);
}

function goToHomePage() {
    console.log("Welcome! Redirecting to the Home Page...");
}

login("admin", "1234", goToHomePage);