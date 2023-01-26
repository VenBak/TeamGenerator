const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email) {
        super(name, email, id, office)
        this.office = office
    }
}

module.exports = Manager
