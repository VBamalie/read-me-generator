// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown =  require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    //0
    {
        message: "What is your GitHub username?",
        type: "input",
        name: "username"
    },

     {
        message: "what is your email addess?" ,
        type: "input",
        name: "email"
    }, 

     {
        message: "What is your project's name?" ,
        type: "input",
        name: "title"
     },

     {
         message: "Please write a short description of your project:" ,
         type: "input" ,
         name: "description"
    }, 

     {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        
    },

    {
        message: "please put in a url for a video or picture" ,
        type: "input" ,
        name: "visuals"
    }, 

    {
        message: "what does the user need to know about contributing to the repo?",
        type: "input",
        name: "contribution"
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Making ReadMe...")
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {writeToFile("README.md" , generateMarkdown({...answers
        }))})
        
}

// Function call to initialize app
init();

