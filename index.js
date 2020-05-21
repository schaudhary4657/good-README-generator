const inquire = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        message: "Please enter your GitHub username",
        type: "input",
        name: "username"
    },
    {
        message: "Please enter your GitHub email",
        type: "input",
        name: "email"
    },
    {
        message: "Please enter your project's name",
        type: "input",
        name: "title"
    },
    {
        message: "Please write a short description about your project",
        type: "input",
        name: "description"
    },
    {
        message: "Please list table of contents of your project",
        type: "input",
        name: "table of contents"
    },
    {
        message: "Please write command to install dependencies",
        type: "input",
        name: "installation",
        default: "npm i"
    },
    {
        message: "Please write about the usage of your project",
        type: "input",
        name: "usage"
    },
    {
        message: "Please write about the license type of your project",
        type: "checkbox",
        choices: ["MIT", "APACHE 2.0", "ISC", "None"],
        name: "license"
    },
    {
        message: "Please write about contributing of your project",
        type: "input",
        name: "contributing"
    },
    {
        message: "Please write command to run tests",
        type: "input",
        name: "tests",
        default: "npm test"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquire.prompt(questions).then((inquireResponse) => {
        writeToFile("README.md", generateMarkdown({ ...inquireResponse }));
    });
}

init();