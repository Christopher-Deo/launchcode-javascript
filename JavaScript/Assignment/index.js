const input = require('readline-sync');

//TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer =["Paris", 4, "Electric", "Humpdaayy!!", true] ;
let candidateAnswer= [];
let questions = ["What is the capital of France?", "What is 2*2?", "What kind of car is worthless?", "Mike, Mike, what daaaay is iiiiitt?", "T/F Typescript rules and JS drools!"];
let correctAnswers = [];
let candidateAnswers = [];


function askForName() {
    // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ")
}

function askQuestion() {
    // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for(let i = 0; i < questions.length; i++){
    console.log(questions[i]);
    candidateAnswer = input.question("What is your answer? ");
    }
}

function gradeQuiz(candidateAnswers) {
    // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
    let grade;

    return grade;
}

function runProgram() {
    askForName();
    // TODO 1.1c: Ask for candidate's name //
    askQuestion();
    gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
    candidateName: candidateName,
    question: question,
    correctAnswer: correctAnswer,
    candidateAnswer: candidateAnswer,
    questions: questions,
    correctAnswers: correctAnswers,
    candidateAnswers: candidateAnswers,
    gradeQuiz: gradeQuiz,
    runProgram: runProgram
};
