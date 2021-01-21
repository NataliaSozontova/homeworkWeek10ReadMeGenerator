// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = reuire('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please write installation instructions for your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please write usage information for your project'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please write contribution guidelines for your project'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please write test instructions for your project'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please write test instructions for your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project',
        choices: ['MIT','Apache','GPL', 'GPL v3','LGPL v3', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
