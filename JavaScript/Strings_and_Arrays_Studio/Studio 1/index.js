const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0, 3);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The old string is ${str} and the new string is ${newStr}.`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let num = input.question("Enter the number of letters that will be relocated: ");
let newStr2 = str.slice(num) + str.slice(0, num);
console.log(`The old string is ${str} and the new string is ${newStr2}.`);


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let num2 = input.question("Enter the number of letters that will be relocated: ");
if (num2 > str.length) {
    num2 = 3;
    console.log("The number you entered is longer than the word. Defaulting to 3.");
}
    


