let pin = "1234";
let balance = 1000;

let userPin = prompt("Enter your PIN");

if (userPin === pin) {

    console.log("Correct PIN");

    let choice = Number(prompt(
        "Choose an operation:\n" +
        "1. Withdraw\n" +
        "2. Deposit\n" +
        "3. Check Balance\n" +
        "4. Change PIN"
    ));

    if (choice === 1) {

        let amount = Number(prompt("Enter amount"));

        if (amount <= balance) {
            balance = balance - amount;
            console.log("Withdraw successful");
            console.log("Current Balance = " + balance);

            alert("Withdraw successful");
            alert("Current Balance = " + balance);
        } else {
            console.log("Not enough balance");
            alert("Not enough balance");
        }

    } else if (choice === 2) {

        let amount = Number(prompt("Enter amount"));

        if (amount > 0) {
            balance = balance + amount;
            console.log("Deposit successful");
            console.log("Current Balance = " + balance);

            alert("Deposit successful");
            alert("Current Balance = " + balance);
        } else {
            console.log("Amount must be greater than zero");
            alert("Amount must be greater than zero");
        }

    } else if (choice === 3) {

        console.log("Current Balance = " + balance);
        alert("Current Balance = " + balance);

    } else if (choice === 4) {

        let newPin = prompt("Enter new PIN");

        if (newPin.length === 4) {
            pin = newPin;
            console.log("PIN changed successfully");
            alert("PIN changed successfully");
        } else {
            console.log("PIN must contain exactly 4 digits");
            alert("PIN must contain exactly 4 digits");
        }

    } else {

        console.log("Invalid choice");
        alert("Invalid choice");

    }

} else {

    console.log("Wrong PIN");
    alert("Wrong PIN");

}