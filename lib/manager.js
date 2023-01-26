const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, email, id, office) {
        super(name, email, id)
        this.office = office
    }
}

module.exports = Manager
