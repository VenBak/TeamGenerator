// Console log 'Welcome to team generator, Use 'npm run reset' to reset the dist/ folder'

// Please build your team
// 'What is your team manager's name ?'
// 'What is the team manager's id ?
// 'What is the team manager's email ?'
// 'What is the team manager's office number ?'

// 'Which type of team member would you like to add ?'
// - Engineer *
// - Intern
// - I don't want to add any more team members

// 'What is your engineer's name ?'
// 'What is your engineer's id ?'
// 'What is your engineer's email ?'
// 'What is your engineer's github username ?'

// 'Which type of team member would you like to add ?'
// - Engineer 
// - Intern *
// - I don't want to add any more team members

// 'What is your intern's name ?'
// 'What is your intern's id ?
// 'What is your intern's email ?'
// 'What is your intern's school ?'

// 'Which type of team member would you like to add ?'
// - Engineer 
// - Intern 
// - I don't want to add any more team members *

// Create html file



const generateHTMLlayout = ({Mname, Mid, Memail, Moffice, member, internSchool} ) =>
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

    </header>
    <main>

    </main>
</body>
</html>
`

// const createCard = ({ }) =>
// `
// <div class="card" style="width: 18rem;">
//     <div class="card-body">
//         <h5 class="card-title" id="role">`${role}`</h5>
//         <p class="card-text" id="name">`${role}`</p>
//         <p class="card-text" id="email">`${role}`</p>
//         <p class="card-text" id="info">`${role}`</p>
//     </div>
// </div>


// Employee.forEach(element => {
//     createCard({})
// });

// Adds file system to create html file
const fs = require('fs');
// Adds inquirer so the user can be prompted via the terminal
const inquirer = require('inquirer')

// Adds all the constructors for the objects I am about to create
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
const { ADDRGETNETWORKPARAMS } = require('dns');
const { create } = require('domain');

// const idArray = require('util/types');

// Function for creating a Manager
createManager = () => {
    inquirer.prompt([
        { 
        type: "input",
        name: "name",
        message: "What is your team manager's name ?",
        }, 
        { 
        type: "input",
        name: "id",
        message: "What is the team manager's id ?",
        },
        { 
        type: "input",
        name: "email",
        message: "'What is the team manager's email ?",
        }, 
        {
        type: 'input',
        name: 'office',
        message: 'What is your Managers office room number ?'
        }, 
        { 
        type: "list",
        name: "member",
        message: "Which type of team member would you like to add ?",
        choices: ["Engineer", "Intelkrn", "I don't want to add any more team members"],
        }
        ]).then(answers => {
            const manager = new Manager(answers.ManagerName, answers.ManagerId, answers.ManagerEmail, answers.ManagerOffice)
            addToHTML(manager);
        })
}
    
//     type: 'input',
//     name: 'internSchool',
//     message: 'What is your interns school ?',
//     validate: (answer) => {
//     if (answer !== '') {
//         return true;
//     }
//     return 'Please enter at least one character.'
//     }
//     }
// ])
// .then((answers) => {
//     const intern = new Intern(
//     answers.internName,
//     answers.internID,
//     answers.internEmail,
//     answers.InternSchool);
//     teamMembers.push(intern)
//     idArray.push(answers.internID)
//     createTeam()
// })
// Function to add an extra team member
addTeamMember = () => {
    inquirer.prompt([
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
                createManger();
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

// Function to create an Engineer
const createEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your engineers name ?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your engineers email ?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your engineers ID ?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your engineers Github username ?'
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.email, Date.now(), answers.github);
            addToHTML(engineer);
        });
};

// Function to create an Intern
const createIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your interns name ?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your interns email ?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your interns ID ?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Which school did your Intern go to ?'
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.InternName, answers.InternEmail, answers.InternID, answers.InternSchool);
            addToHTML(intern);
        });
};

// Function which creates html snippet
const addToHTML = (employee) => {
    let employeeHTML = "";
    if(employee instanceof Manager){
      employeeHTML = `<div>
            <h2>Manager</h2>
            <p>Name: ${employee.name}</p>
            <p>Email: ${employee.email}</p>
            <p>ID: ${employee.id}</p>
            <p>Office: ${employee.office}</p>
        </div>`;
    } else if(employee instanceof Engineer){
       employeeHTML = `<div>
            <h2>Engineer</h2>
            <p>Name: ${employee.name}</p>
            <p>Email: ${employee.email}</p>
            <p>ID: ${employee.id}</p>
            <p>Github: ${employee.github}</p>`
    } else if(employee instanceof Intern){
        employeeHTML = `<div>
                <h2>Intern</h2>
                <p>Name: ${employee.name}</p>
                <p>Email: ${employee.email}</p>
                <p>ID: ${employee.id}</p>
                <p>School: ${employee.school}</p>`
 }}
 

 // Calls the create Manager function since at least one manager must be present
 createManager();