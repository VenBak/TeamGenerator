const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email) {
        super(name, email, id)
        this.school = school
    }
}

module.exports = Intern