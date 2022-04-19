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
    //1
     {
        message: "what is your email addess?" ,
        type: "input",
        name: "email"
    }, 
     //2
     {
        message: "What is your project's name?" ,
        type: "input",
        name: "title"
     },
     //3
     "Please write a short description of your project:" , 
     {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT"],
        name: "license"
        
    },
   //4
    {
        message: "what does the user need to know about using the repo" ,
        type: "input" ,
        name: "description"
    }, 
    //5
    {
        message: "what does the user need to know about contributing to the repo?",
        type: "input",
        name: "contribution"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([


  ])
  .then((answers) => {
      let fileName = `${answers.name.toLowerCase().split().join("")}${".json"}`
    // Use user feedback for... whatever!!
    fs.writeFile(fileName, JSON.stringify(answers , "null" , "\t") , (err) => {
        if (err) throw err;
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

}

// Function call to initialize app
init();
