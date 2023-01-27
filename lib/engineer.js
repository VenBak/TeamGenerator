const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, email, id, github) {
       super(name, email, id)
       this.github = github
       this.role = "Engineer"
    }

    // Creates function to get the name of the employee
    getName() {
        return this.name;
    }

    // Creates function to get the ID of the employee
    getId(){
        return this.id;
    }

    // Creates function to get the email of the employee
    getEmail() {
        return this.email;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer