// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

/*
1. returns false if shift value is equal to 0
2. returns false if shift value is less than -25
3. returns false if shift value is great than 25
4. returns false if shift value is not present
5. ignores capitals
6. handles shifts that go past Z
7. handes shifts that go before A
8. maintains spaces and nonalphabet symbols

*/
describe("caesar", () => {
    it("should decode or encode a message with a caesar cipher", () => {
      const expected = "def";
      const actual = caesar("abc", 3);
      expect(actual).to.eql(expected);
    });
    it("should return false if shift value is not present, greater than 25, or -25", () => {
      const equalsZero = caesar("abc", 0);
      const lessThanNeg25 = caesar("abc", -36);
      const greaterThan25 = caesar("abc", 26);
      const notPresent = caesar("abc");
  
      expect(equalsZero).to.be.false;
      expect(lessThanNeg25).to.be.false;
      expect(greaterThan25).to.be.false;
      expect(notPresent).to.be.false;
    });
    it("should ignore capital letters", () => {
      const expected = "def";
      const actual = caesar("ABC", 3);
      expect(actual).to.eql(expected);
    });
    it("should handle shifts that go past the end of the alphabet", () => {
      const expected = "abc";
      const actual = caesar("xyz", 3);
      expect(actual).to.eql(expected);
    });
    /*it("should maintain spaces before and after encoding", () => {
      const expected = "def def";
      const actual = caesar("abc abc", 3);
      expect(expected).to.eql(actual);
    });*/
  });