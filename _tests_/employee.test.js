const Employee = require('../lib/employee');

describe('Employee', () => {

  // Creates a sample object that will be tested
  const employee = new Employee("John", "John@gmail.com", 421, 'Employee');

  // Makes sure that the saved name is John 
  it("Should show the name as 'John'", () => {
      expect(employee.name).toBe("John");
  })

  // Makes sure that the method which returns the name works
  it("Should return the given name", () => {
    expect(employee.getName()).toBe("John");
  })

  // Makes sure that the email that was given matches the one of the object
  it("Should save the email as John@gmail.com", () => {
    expect(employee.email).toBe("John@gmail.com");
  })

  // Makes sure that the getEmail method works properly
  it("Should return the saved email", () => {
    expect(employee.getEmail()).toBe("John@gmail.com");
  })

  // Makes sure that the inputed id number matches the one in the object and its type
  it("Should save the value id to 421", () => {
      expect(employee.id).toBe(421);
      expect(typeof (employee.id)).toBe("number");
  })

  // Makes sure the ID method matches the given input and that the returned value is also a number type
  it("Should return the saved id", () => {
    expect(employee.getId()).toBe(421);
    expect(typeof (employee.getId())).toBe("number");
  })

  // Makes that the saved property of role matches the given one
  it("Should show that the role is indeed employee", () => {
    expect(employee.role).toBe("Employee");
  })

  // Makes sure that the method of getRole functions as well
  it("Should return the saved role", () => {
    expect(employee.getRole()).toBe("Employee");
  })
});

