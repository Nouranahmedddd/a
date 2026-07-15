let studentName = prompt("Enter Student Name");
let attendance = Number(prompt("Enter Attendance Percentage"));
let midterm = Number(prompt("Enter Midterm Score"));
let finalExam = Number(prompt("Enter Final Exam Score"));
let assignment = Number(prompt("Enter Assignment Score"));
let payment = prompt("Is Tuition Paid? (Yes/No)");

if (payment.toLowerCase() === "no") {

    console.log("You cannot view your result because tuition is not paid.");

} else {

    if (attendance < 75) {

        console.log("Student Name: " + studentName);
        console.log("Academic Status: Fail");
        console.log("Reason: Attendance is below 75%");

    } else {

        let total = midterm + finalExam + assignment;
        let grade = "";

        if (total >= 90) {
            grade = "A";
        } else if (total >= 80) {
            grade = "B";
        } else if (total >= 70) {
            grade = "C";
        } else if (total >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        console.log("Student Name: " + studentName);
        console.log("Attendance: " + attendance + "%");
        console.log("Midterm Score: " + midterm);
        console.log("Final Exam Score: " + finalExam);
        console.log("Assignment Score: " + assignment);
        console.log("Total Score: " + total);
        console.log("Letter Grade: " + grade);

        if (grade === "F") {
            console.log("Academic Status: Fail");
        } else {
            console.log("Academic Status: Pass");
        }

        if (grade === "A") {
            console.log("Congratulations! You are eligible for a scholarship.");
        }

    }

}