class Employee {
    // Creates an object with the details of an employee
    constructor(name, email, id, role) {
      this.name = name;
      this.email = email;
      this.id = id;
      this.role = role;
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

    // Creates function to get the role of the employee
    getRole() {
        return this.role;
    }
  }

  module.exports = Employee