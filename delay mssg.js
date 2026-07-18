function sendMessage(message, delay) {
    console.log("Sending message...");

    setTimeout(() => {
        console.log("Message: " + message);
    }, delay);
}

sendMessage("Welcome to JavaScript!", 2000);