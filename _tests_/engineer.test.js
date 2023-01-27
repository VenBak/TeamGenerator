const Engineer = require('../lib/engineer');

describe('Engineer', () => {

  // Creates a sample object that will be tested
  const engineer = new Engineer("Bob", "Bob@gmail.com", 70, 'Bobbycat');

  // Makes sure that the saved name is Bob 
  it("Should show the name as 'Bob'", () => {
      expect(engineer.name).toBe("Bob");
  })

  // Makes sure that the method which returns the name works
  it("Should return the given name", () => {
    expect(engineer.getName()).toBe("Bob");
  })

  // Makes sure that the email that was given matches the one of the object
  it("Should save the email as Bob@gmail.com", () => {
    expect(engineer.email).toBe("Bob@gmail.com");
  })

  // Makes sure that the getEmail method works properly
  it("Should return the saved email", () => {
    expect(engineer.getEmail()).toBe("Bob@gmail.com");
  })

  // Makes sure that the inputed id number matches the one in the object and its type
  it("Should save the value id to 70", () => {
      expect(engineer.id).toBe(70);
      expect(typeof (engineer.id)).toBe("number");
  })

  // Makes sure the ID method matches the given input and that the returned value is also a number type
  it("Should return the saved id", () => {
    expect(engineer.getId()).toBe(70);
    expect(typeof (engineer.getId())).toBe("number");
  })

  // Makes that the saved property of role matches the given one
  it("Should show that the role is indeed engineer", () => {
    expect(engineer.role).toBe("Engineer");
  })

  // Makes sure that the method of getRole functions as well
  it("Should return the saved role", () => {
    expect(engineer.getRole()).toBe("Engineer");
  })

  // Makes sure that the given github username matches the one in the object
  it("Should show the Github username", () => {
    expect(engineer.github).toBe("Bobbycat")
  })

  // Makes sure that the method of getGithub functions as well
  it("Should return the saved Github username", () => {
    expect(engineer.getGithub()).toBe("Bobbycat");
  })
});
