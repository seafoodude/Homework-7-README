// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name:"title",
}, {
    type: "input",
    message: "What is the project about? Give a detailed description of your project.",
    name:"description",
}, {
    type: "input",
    message: "What does the user need to install to run this app?",
    name:"installation",
}, {
    type: "input",
    message: "How is the app used? Give instructions.",
    name:"usage",
}, {
    type: "list",
    message: "What license is being used?",
    name:"license",
    choices: ['MIT', 'Apache', 'GPL', 'BSD'],
}, {
    type: "input",
    message: "Who contributed to this project?:",
    name:"contributing",
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    name:"tests"
}, {
    type: "input",
    message: "Contact info for inquiries",
    name:"questions",
}, {
    type: 'input',
    message: 'What is your Github username?',
    name:'username',
}, {
    type: 'input',
    message: 'What is your email address?',
    name:'email'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log("success!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
