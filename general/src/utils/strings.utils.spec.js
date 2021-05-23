import {sayHelloTo,decodeMorse} from "./strings.utils.js";

describe("The string package", () => {

  describe("the sayHelloTo function", () => {

    it("should return 'Hi, Peter!' if the argument is 'Peter'", () => {
      const actual = sayHelloTo("Peter");
      const expected = "Hi, Peter!";
      expect(actual).toBe(expected);
    });
    
  });

  describe("the morse decoder", () => {

    test("decode 'HEY JUDE'", () => {
      const actual = decodeMorse(".... . -.--   .--- ..- -.. .");
      const expected = "HEY JUDE";
      expect(actual).toMatch(expected);
    });

    test("decode 'SOS'", () => {
      const actual = decodeMorse("... --- ...");
      const expected = "SOS";
      expect(actual).toMatch(expected);
    });

    test("decode 'NO PROBLEMO'", () => {
      const actual = decodeMorse("-. ---   .--. .-. --- -... .-.. . -- ---");
      const expected = "NO PROBLEMO";
      expect(actual).toMatch(expected);
    });

  });
  
});