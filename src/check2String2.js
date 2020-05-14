const checkIfMatch = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const dictionary1 = {};
  const dictionary2 = {};
  for (const char of string1) {
    dictionary1[char] = char;
  }
  for (const char in string2) {
    dictionary2[char] = string2[char];
  }

  console.log("check2String2.js:15", {
    dictionary1,
    dictionary2
  });

  for (let i = 0; i < Object.keys(dictionary1).length; i++) {
    if (!dictionary1[dictionary2[i]]) {
      return false;
    }
  }
  return true;
};
// console.log('--------->', checkIfMatch('abcd', 'dbac'));
// console.log('--------->', checkIfMatch('abcd', 'dbgc'));
console.log("--------->", checkIfMatch("abcdc", "abcdg"));
