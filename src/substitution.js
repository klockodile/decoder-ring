// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (alphabet == null || alphabet.length !== 26) {
      return false;
    }

    if (encode) {
      const substitution = theAlphabet(alphabet);

      if (!substitution) {
        return false;
      }

      return encodeMessage(input, substitution);
    } else if (!encode) {
      const substitution = theAlphabet(alphabet);

      if (!substitution) {
        return false;
      }

      return decodeMessage(input, substitution);
    }
  }

  function theAlphabet(alphabet) {
    const substitution = alphabet.split("");
    let repeat = 0;

    for (let letter in substitution) {
      for (let find in substitution) {
        if (substitution[letter] === substitution[find]) {
          repeat++;
        }
      }
    }

    if (repeat !== 26) {
      return false;
    } 
    
    return substitution;
  }

  function encodeMessage(input, alphabet) {

    const origin = "abcdefghijklmnopqrstuvwxyz".split("");
    const message = input.split("");
    
    let result = [];

    for (let letter in message) {
      if (message[letter] === " ") {
        result.push(" ");
      } else {
        origin.find((found, index) => {
          if (message[letter] === found) {
            result.push(index);
          }
        });
      }
    }

    for (let number in result) {
      if (result[number] !== " ") {
        result[number] = alphabet[result[number]];
      } else {
        result[number] = " ";
      }
    }

    return result.join("");
  }

  function decodeMessage(input, alphabet) {

    const origin = "abcdefghijklmnopqrstuvwxyz".split("");
    const message = input.split("");
    
    let result = [];

    for (let letter in message) {
      if (message[letter] === " ") {
        result.push(" ");
      } else {
        alphabet.find((found, index) => {
          if (message[letter] === found) {
            result.push(index);
          }
        });
      }
    }

    for (let number in result) {
      if (result[number] !== " ") {
        result[number] = origin[result[number]];
      } else {
        result[number] = " ";
      }
    }

    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
