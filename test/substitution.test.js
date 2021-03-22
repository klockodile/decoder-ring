// Write your tests here!
const substitution = require("../src/substitution.js");
const expect = require("chai").expect;
/*
1. returns false if alphabet isn't 26 characters
2. translates the phrase based on the alphabet
3. returns false for duplicate chars
4. maintains spaces
5. ignores capitals
*/
describe("substitution", () => {
    it("should decode or encode a message with a substitution cipher", () => {
      const expected = "zyx";
      const actual = substitution("abc", "zyxwvutsrqponmlkjihgfedcba");
      expect(actual).to.eql(expected);
    });
    it("returns false if given alphabet is anything but 26 characters", () => {
      const lessThanTwentySix = substitution("abc", "zxy");
      expect(lessThanTwentySix).to.be.false;
    });
    it("returns false for duplicate characters", () => {
      const dupeChars = substitution("abc", "aacdefghijklmnopqrstuvwxyz");
      expect(dupeChars).to.be.false;
    });
    it("maintains spaces", () => {
      const expected = "zyx zyx";
      const actual = substitution("abc abc", "zyxwvutsrqponmlkjihgfedcba");
      expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
      const expected = "zyx";
      const actual = substitution("abc", "zyxwvutsrqponmlkjihgfedcba");
      expect(actual).to.eql(expected);
    });
  });
