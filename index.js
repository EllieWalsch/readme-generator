// Includes packages needed in this project
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions for each section in README file
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
    choices: ["MIT", "GPL 3.0", "No license"]
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
}];

// First, prompt the questions, then generate file using the data
inquirer.prompt(questions)
    .then(data => {
        fs.writeFileSync("generatedREADME.md", generateMarkdown(data))
    }
);
