const checkIfMatch = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const dictionary1 = {};
  const dictionary2 = {};
  for (const char of string1) {
    if (typeof dictionary1[char] === "undefined") {
      dictionary1[char] = 0;
    }
    dictionary1[char]++;
  }
  for (const char of string2) {
    if (typeof dictionary2[char] === "undefined") {
      dictionary2[char] = 0;
    }
    dictionary2[char]++;
  }
  // console.log('dictionary1: ', dictionary1);
  // console.log('dictionary2: ', dictionary2);
  for (const key in dictionary1) {
    // console.log('key: ', key);
    // console.log('dictionary1[key]: ', dictionary1[key]);
    // console.log('dictionary2[key]: ', dictionary2[key]);

    if (dictionary1[key] !== dictionary2[key]) {
      return false;
    }
  }
  return true;
};

// console.log('\'abcd\', \'dbac\' --------->', checkIfMatch('abcd', 'dbac'));
// console.log('\'abcd\', \'dbgc\' --------->', checkIfMatch('abcd', 'dbgc'));
// console.log('\'abcdc\', \'abcdg\' --------->', checkIfMatch('abcdc', 'abcdg'));
console.log("'abcdc', 'abcdg' --------->", checkIfMatch("abcdc", "dbhca"));
