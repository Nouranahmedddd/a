function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Have a nice day!");
}

greet("Nouran", sayGoodbye);