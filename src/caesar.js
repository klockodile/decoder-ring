// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function caesar(input, shift, encode = true) {
  try {
    if (!input) throw "ERROR: No input provided!";
    inputArray = input.toLowerCase().split("");
    if (!shift || shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1;

    const resultArray = inputArray.map((char) => {
      const charCode = char.charCodeAt();
      if (charCode < 97 || charCode > 122) return char;

      const theShift = (charCode + shift - 97) % 26;
      if (theShift >= 0) return String.fromCharCode(theShift + 97);
      return String.fromCharCode(theShift + 123);
    });

    return resultArray.join("");
  } catch (error) {
    return `ERROR: ${error}`;
  }
}
})();
module.exports = caesar;
