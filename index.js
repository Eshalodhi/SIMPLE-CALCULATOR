#! /usr/bin/env node
import inquirer from "inquirer";
//printing a Wellcome message
console.log("\n\tWelcome to \`CodewithEsha\` -CLI Simple Calculator\n");
//Asking Question from Users through Inquirer
let answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one Operator to perform Operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
//conditional statment If-Else
if (answer.Operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Subtractions") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Invalid Input");
}
;
