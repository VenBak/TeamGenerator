const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, email, id, school) {
        super(name, email, id)
        this.school = school
        this.role = "Intern"
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
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

}

module.exports = Intern