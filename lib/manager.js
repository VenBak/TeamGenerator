const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, email, id, office) {
        super(name, email, id)
        this.office = office
        this.role = 'Manager'
    }

    // Functions which returns the employee's role
    getRole() {
        return this.role
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

    // Creates a function that returns the office number
    getOffice () {
        return this.office;
    }
}

module.exports = Manager
