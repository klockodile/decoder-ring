function polybius(input, encode = true) {
  let output = "";
  const alphabet = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    "(i/j)": "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };
  let lowerCaseInput = input.toLowerCase();
  if (encode) {
    for (let i = 0; i < lowerCaseInput.length; i++) {
      let letter = lowerCaseInput[i];
      if (
        !alphabet.hasOwnProperty(letter) &&
        letter !== "i" && letter !== "j"
      ) {
        output += letter;
      } else if (letter === "i" || letter === "j") output += alphabet["(i/j)"];

      for (let key in alphabet) {
        if (letter === key) output += alphabet[key];
      }
    }
    return output;
  } else {
    if (lowerCaseInput.replace(" ", "").length % 2 !== 0) return false;
    let inputArray = lowerCaseInput.split(" ");
    for (let i = 0; i < inputArray.length; i++) {
      let word = inputArray[i];
      for (let j = 0; j < word.length; j += 2) {
        let letter = word[j] + word[j + 1];
        for (let key in alphabet) {
          if (letter === alphabet[key]) {
            output += key;
          }
        }
      }
      output += " ";
    }
    return output.slice(0, -1);
  }
}

module.exports = polybius;
