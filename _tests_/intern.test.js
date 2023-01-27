const Intern = require('../lib/intern');

describe('Intern', () => {

  // Creates a sample object that will be tested
  const intern = new Intern("Lucy", "Lucy@gmail.com", 323, 'MIT');

  // Makes sure that the saved name is Lucy 
  it("Should show the name as 'Lucy'", () => {
      expect(intern.name).toBe("Lucy");
  })

  // Makes sure that the method which returns the name works
  it("Should return the given name", () => {
    expect(intern.getName()).toBe("Lucy");
  })

  // Makes sure that the email that was given matches the one of the object
  it("Should save the email as Lucy@gmail.com", () => {
    expect(intern.email).toBe("Lucy@gmail.com");
  })

  // Makes sure that the getEmail method works properly
  it("Should return the saved email", () => {
    expect(intern.getEmail()).toBe("Lucy@gmail.com");
  })

  // Makes sure that the inputed id number matches the one in the object and its type
  it("Should save the value id to 323", () => {
      expect(intern.id).toBe(323);
      expect(typeof (intern.id)).toBe("number");
  })

  // Makes sure the ID method matches the given input and that the returned value is also a number type
  it("Should return the saved id", () => {
    expect(intern.getId()).toBe(323);
    expect(typeof (intern.getId())).toBe("number");
  })

  // Makes that the saved property of role matches the given one
  it("Should show that the role is indeed an intern", () => {
    expect(intern.role).toBe("Intern");
  })

  // Makes sure that the method of getRole functions as well
  it("Should return the saved role", () => {
    expect(intern.getRole()).toBe("Intern");
  })

  // Makes sure that the given school name matches the one in the object
  it("Should show the school name", () => {
    expect(intern.school).toBe("MIT")
  })

  // Makes sure that the method of getSchool functions as well
  it("Should return the saved school name", () => {
    expect(intern.getSchool()).toBe("MIT");
  })
});