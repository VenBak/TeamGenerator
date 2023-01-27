// Adds inquirer so the user can be prompted via the terminal
const inquirer = require("inquirer")

// Adds file system to create html file
const fs = require("fs");

// Adds path
const path = require("path")

// Adds all the constructors for the objects I am about to create
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');

// Saves all of the employees inside this array called team
const team = []

// Saves all of the ids inside of an array
const idArray = []

// Function for creating a Manager
createManager = () => {
    inquirer.prompt([
        // Asks for Manager's name
        { 
        type: "input",
        name: "name",
        message: "What is your team manager's name ?",
        }, 
        // Asks for Manager's id
        { 
        type: "input",
        name: "id",
        message: "What is the team manager's id ?",
        },
        // Asks for managers email
        { 
        type: "input",
        name: "email",
        message: "'What is the team manager's email ?",
        }, 
        // Asks for managers office number
        {
        type: 'input',
        name: 'office',
        message: 'What is your Managers office room number ?'
        }
        ]).then(answers => {
            // Uses the manager constructor to create an object with the answers the user has given
            const manager = new Manager(answers.name, answers.email, answers.id, answers.office)
            const employee = new Employee(answers.name, answers.email, answers.id, 'Manager')
            // Adds constructed object to the add to HTML function which adds html tags to the data
            addtoHTML(manager);
            // Pushes the constructed object to an array titled team
            team.push(manager)
            // Pushes the inputed id to an array
            idArray.push(answers.id)
            // Runs the function which asks the user if they wish to add another team member
            addTeamMember()
        })
}

// Function to create an Engineer
const createEngineer = () => {
    inquirer
        .prompt([
            {
            // Asks for the engineer's name
                type: 'input',
                name: 'name',
                message: 'What is your engineers name ?'
            },
            // Asks for the engineer's email
            {
                type: 'input',
                name: 'email',
                message: 'What is your engineers email ?'
            },
            // Asks for the engineer's ID
            {
                type: 'input',
                name: 'id',
                message: 'What is your engineers ID ?'
            },
            // Asks for the engineer's Github username
            {
                type: 'input',
                name: 'github',
                message: 'What is your engineers Github username ?'
            }
        ])
        .then(answers => {
            // Constructs an object using the answers that were given with the imported format from ./engineer.js
            const engineer = new Engineer(answers.name, answers.email, answers.id, answers.github);
            // Creates another object for the specific role under the general class of employee
            const employee = new Employee(answers.name, answers.email, answers.id, 'Engineer')
            // Adds answers to a string which contains html tags
            addtoHTML(engineer);
            // Pushes the object to an array called team
            team.push(engineer)
            // Pushes the given id to an array call idArray
            idArray.push(answers.id)
            // Runs the question whether the user wants to add another team member
            addTeamMember()
        });
};

// Function to create an Intern Object
const createIntern = () => {
    inquirer
        .prompt([
            // Asks for the intern's name
            {
                type: 'input',
                name: 'name',
                message: 'What is your interns name ?'
            },
            // Asks for the intern's email address
            {
                type: 'input',
                name: 'email',
                message: 'What is your interns email ?'
            },
            // Asks for the interns ID number
            {
                type: 'input',
                name: 'id',
                message: 'What is your interns ID ?'
            },
            // Asks which school the intern has gone to
            {
                type: 'input',
                name: 'school',
                message: 'Which school did your Intern go to ?'
            }
        ])
        .then(answers => {
            // Creates a new Intern object using the imported constructor
            const intern = new Intern(answers.name, answers.email, answers.id, answers.school);
            // Creates another object for the specific role under the general class of employee
            const employee = new Employee(answers.name, answers.email, answers.id, 'Intern')
            // Runs the object through a function which adds html tags and adds it to a string
            addtoHTML(intern);
            // Pushes the object to an array called team
            team.push(intern)
            // Pushes the given id to an array called id Array
            idArray.push(answers.id)
            // Asks the user if they want another team member
            addTeamMember()
        });
};

// Function to add an extra team member
addTeamMember = () => {
    inquirer.prompt([
        // Asks if the user wants to add another team member and if yes what kind of role
        {
            type: 'list',
            name: 'role',
            message: 'What type of team member would you like to add ?',
            choices:['Manager', 'Engineer', 'Intern', 'None']
        }
    ]).then(answers => {
        // Checks which role the user picked and runs the function for that specific role so that the user may add additonal team members
        switch(answers.role) {
            case 'Manager':
                createManager();
                break;
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            case 'None':
                console.log('Your team has succesfully been created!')
                break;
        }
    })
}

// Creates a string variable for the HTML code 
var employeeHTML = "";

// Function which creates html snippet
const addtoHTML = (employee) => {
    // Checks if the given parameter is an instance of the classes
    if(employee instanceof Manager){
    // Adds to the string var of employeeHTML with the answers that were given from the user
      employeeHTML += `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Manager</h2>
                <p class="card-subtitle">Name: ${employee.name}</p>
                <a class="card-text" href="mailto:${employee.email}">Email: ${employee.email}</a>
                <p class="card-text">ID: ${employee.id}</p>
                <p class="card-text">Office: ${employee.office}</p>
            </div>
        </div>
        `
    } else if(employee instanceof Engineer){
       employeeHTML += `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Engineer</h2>
                <p class="card-subtitle">Name: ${employee.name}</p>
                <a class="card-text" href="mailto:${employee.email}">Email: ${employee.email}</a>
                <p class="card-text">ID: ${employee.id}</p>
                <a class="card-text" href="https://github.com/${employee.github}" target="_blank">Github: ${employee.github}</a>
            </div>
        </div>
        `
    } else if(employee instanceof Intern){
        employeeHTML += `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Intern</h2>
                <p class="card-subtitle">Name: ${employee.name}</p>
                <a class="card-text" href="mailto:${employee.email}">Email: ${employee.email}</a>
                <p class="card-text">ID: ${employee.id}</p>
                <p class="card-text">School: ${employee.school}</p>
            </div>
        </div>
        `
 }

// Inserts the team members HTML code snippet to the larger code snippet
var HTML = 
 `
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
     <title>Document</title>
 </head>
 <body>
     <header>
        Team work makes the dream work!
     </header>
     <main>
     `+ employeeHTML +`
     </main>
 </body>
 </html>
 `
// Creates a file called team.html with the content of the file being the variable HTML
 fs.writeFileSync(path.join(__dirname, 'team.html'), HTML)
}

 // Calls the create Manager function since there must be at least one
 createManager();
