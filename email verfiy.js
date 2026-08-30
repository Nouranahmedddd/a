function sendVerificationEmail(email) {
    return new Promise((resolve) => {
        console.log("Sending verification email...");

        setTimeout(() => {
            console.log("Email sent successfully");
            resolve();
        }, 2000);
    });
}

async function registerUser(name, email) {
    try {
        if (!name || !email) {
            throw new Error("Name and email are required");
        }

        await sendVerificationEmail(email);

        console.log("User registered successfully");
    } catch (error) {
        console.log(error.message);
    }
}

// Example
registerUser("Esraa", "esraa@gmail.com");

// Invalid Example
registerUser("", "");