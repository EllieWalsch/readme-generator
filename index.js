// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type:"input",
    name:"title",
    message:"What is the title of your project?"
},
{
    type:"input",
    name:"description",
    message:"Please enter a description of your project."
},
{
    type:"input",
    name:"installation",
    message:"What are the steps required to install your project?"
},
{
    type:"input",
    name:"usage",
    message:"Please enter description and examples of usage."
},
{
    type:"input",
    name:"contribution",
    message:"How can others contribute to this project?"
},
{
    type:"input",
    name:"tests",
    message:"What tests can be run on this project? Please provide instructions for use."
},
{
    type:"list",
    name:"license",
    message:"What license will your project use?",
    choices: ["MIT License", "GNU GPLv3", "No license"]
},
{
    type:"input",
    name:"github",
    message:"What is your Github username?"
},
{
    type:"input",
    name:"email",
    message:"What is your email address?"
}
]

inquirer.prompt(questions);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();