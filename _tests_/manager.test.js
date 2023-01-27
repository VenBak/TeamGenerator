const Manager = require('../lib/manager');

describe('Manager', () => {

  // Creates a sample object that will be tested
  const manager = new Manager("Alice", "Alice@gmail.com", 607, 101);

  // Makes sure that the saved name is Alice 
  it("Should show the name as 'Alice'", () => {
      expect(manager.name).toBe("Alice");
  })

  // Makes sure that the method which returns the name works
  it("Should return the given name", () => {
    expect(manager.getName()).toBe("Alice");
  })

  // Makes sure that the email that was given matches the one of the object
  it("Should save the email as Alice@gmail.com", () => {
    expect(manager.email).toBe("Alice@gmail.com");
  })

  // Makes sure that the getEmail method works properly
  it("Should return the saved email", () => {
    expect(manager.getEmail()).toBe("Alice@gmail.com");
  })

  // Makes sure that the inputed id number matches the one in the object and its type
  it("Should save the value id to 607", () => {
      expect(manager.id).toBe(607);
      expect(typeof (manager.id)).toBe("number");
  })

  // Makes sure the ID method matches the given input and that the returned value is also a number type
  it("Should return the saved id", () => {
    expect(manager.getId()).toBe(607);
    expect(typeof (manager.getId())).toBe("number");
  })

  // Makes that the saved property of role matches the given one
  it("Should show that the role is indeed manager", () => {
    expect(manager.role).toBe("Manager");
  })

  // Makes sure that the method of getRole functions as well
  it("Should return the saved role", () => {
    expect(manager.getRole()).toBe("Manager");
  })

  // Makes sure that the given office number has been saved 
  it("Should show that the role is indeed manager", () => {
    expect(manager.office).toBe(101);
  })

  // Makes sure that the method of getOffice functions as well
  it("Should return the saved office number", () => {
    expect(manager.getOffice()).toBe(101);
    expect(typeof (manager.getOffice())).toBe("number");
  })
});