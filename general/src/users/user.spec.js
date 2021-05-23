import User from "./user.model";

describe("The User class", () => {
  
  it("should create a new user", () => {

    const user1 = new User("smith", "smith@test.com");

    expect(user1).toEqual({
      name: "smith",
      email: "smith@test.com",
      errors: []
    });

  });
  describe("The validateName function", () => {
    it("should create new error message if the user name is less than 5 characters", () => {
      const user2 = new User("tom", "tom@test.com");
      user2.validateName();

      expect(user2.errors).toEqual(["the name must be at least 5 chars long"]);
    });
  });
  describe("The isValid function", () => {
    it("should call validateName, validateEmail, validatePassword functions when isValid fn is called", () => {
      // arrange
      const user = new User();
  
      jest.spyOn(user, "validateName");
      jest.spyOn(user, "validatePassword");
      jest.spyOn(user, "validateEmail");
  
      // action
      user.isValid();
  
      // assertion
      expect(user.validatePassword).toHaveBeenCalled();
      expect(user.validateName).toHaveBeenCalled();
      expect(user.validateEmail).toHaveBeenCalled();
    });
  });
});