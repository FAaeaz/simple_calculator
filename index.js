import inquirer from "inquirer";
const annwer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter scond number", type: "number", name: "scondNumber" },
    { message: "Select one of the operator to preform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
// console.log(annwer)
if (annwer.operator === "Addition") {
    console.log(annwer.firstNumber + annwer.scondNumber);
}
else if (annwer.operator === "Subtraction") {
    console.log(annwer.firstNumber - annwer.scondnumber);
}
else if (annwer.operator === "Multiplication") {
    console.log(annwer.firstNumber * annwer.scondNumber);
}
else if (annwer.operator === "Division") {
    console.log(annwer.firstNumber / annwer.scondNumber);
}
else {
    console.log("Please select vild operator");
}
